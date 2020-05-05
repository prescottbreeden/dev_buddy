import React, {useState} from "react";
import { TaskType } from "../types/TaskType.type";
import { setCurrentTask } from "../redux/actions/currenttask.actions";
import { connect, useDispatch } from "react-redux";
import { getCurrentTask } from "../redux/selectors/tasks.selectors";
import Input from "./Input.component";
import Icon from "./Icon.component";

interface TaskProps {
  onChange: Function;
  currentTask: TaskType;
  task: TaskType;
}

const Task: React.FC<TaskProps> = (props) => {
  const dispatch = useDispatch();
  const { currentTask, onChange, task } = props;

  const [session, setSession] = useState(0);
  const [, setState] = useState(); // force state update hack

  const getElapsed = () => {
    const now = new Date().getTime();
    return now - session + task.accumulatedTime;
  };

  const updateCurrentTask = () => {
    dispatch(setCurrentTask(task));
  };

  const isCurrentTask = () => {
    if (currentTask && task) {
      return currentTask.id === task.id;
    }
    return false;
  };

  const toggleComplete = () => {
    if (task.isActive) {
      onChange(task)({
        completed: true,
        isActive: false,
        accumulatedTime: getElapsed(),
      });

    } else {
      onChange(task)({
        completed: !task.completed,
      });
    }
    setState({});
  };


  const toggleActive = () => {
    if (!task.isActive) {
      setSession(new Date().getTime());
      onChange(task)({ isActive: !task.isActive })
    } else {
      onChange(task)({
        accumulatedTime: getElapsed(),
        isActive: !task.isActive,
      });
      setState({});
    }
  };

  const getActions = () => {
    return task.completed
      ? <button onClick={toggleComplete} className="tasks__btn">Re-Open</button>
      : <button onClick={toggleComplete} className="tasks__btn">Complete</button>;
  };

  const getTime = (t: number) => {
    const days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    const hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    return (`${days}d : ${hours}h : ${minutes}m`);
  }

  return (
    <div
      className="tasks__row"
      onClick={updateCurrentTask}
      style={isCurrentTask() ? { border: ".1rem solid steelblue" } : {}}
    >
      <div className="tasks__col tasks__description">
        <Input
          name="name"
          className="tasks__input"
          onChange={onChange(task)}
          value={task && task.name}
        />
      </div>
      <div className="tasks__col tasks__feature">
        <Input
          name="relatedFeature"
          className="tasks__input"
          onChange={onChange(task)}
          value={task && task.relatedFeature}
        />
      </div>
      <div className="tasks__col tasks__actions">
        {getActions()}
      </div>
      <div className="tasks__col tasks__icon">
        {!task.completed && !task.isActive && (
          <div onClick={toggleActive} className="tasks__icon--btn">
            <Icon title="play" className="tasks__icon--svg play" />
          </div>
        )}
        {!task.completed && task.isActive && (
          <div onClick={toggleActive} className="tasks__icon--btn">
            <Icon title="pause" className="tasks__icon--svg pause" />
          </div>
        )}
      </div>
      <div className="tasks__col tasks__time">
        {getTime(task.accumulatedTime)}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const currentTask = getCurrentTask(state);
  return {
    currentTask,
  };
};

export default connect(mapStateToProps)(Task);
