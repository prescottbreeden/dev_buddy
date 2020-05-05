import React from "react";
import { TaskType } from "../types/TaskType.type";
import { SET_CURRENT_TASK } from "../redux/actions/currenttask.actions";
import { connect, useDispatch } from "react-redux";
import { getCurrentTask } from "../redux/selectors/tasks.selectors";
import Input from "./Input.component";

interface TaskProps {
  onChange: Function;
  currentTask: TaskType;
  task: TaskType;
}

const Task: React.FC<TaskProps> = (props) => {
  const dispatch = useDispatch();
  const { currentTask, onChange, task } = props;

  const updateCurrentTask = () => {
    dispatch({ type: SET_CURRENT_TASK, payload: task });
  };

  const isCurrentTask = () => {
    if (currentTask && task) {
      return currentTask.id === task.id;
    }
    return false;
  };

  const getActions = () => {
    return task.isActive
      ? <button className="tasks__btn">Start</button>
      : <button className="tasks__btn tasks__btn--stop">Stop</button>
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
        <button className="tasks__btn tasks__btn--complete">Complete</button>
        
      </div>
      <div className="tasks__col tasks__icon">
        {!task.isActive && <h1 className="tasks__icon--svg play">></h1>}
        {task.isActive && <h1 className="tasks__icon--svg pause">||</h1>}
      </div>
      <div className="tasks__col tasks__time">
        {new Date(Date.now()).toLocaleTimeString()}
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
