import React from "react";
import { TaskType } from "../types/TaskType.type";
import {SET_CURRENT_TASK } from "../redux/actions/currenttask.actions";
import {connect, useDispatch} from "react-redux";
import {getCurrentTask} from "../redux/selectors/tasks.selectors";
import Input from "./Input.component";

interface TaskProps {
  onChange: Function;
  currentTask: TaskType;
  task: TaskType;
}

const Task: React.FC<TaskProps> = (props) => {
  const {
    currentTask,
    onChange,
    task,
  } = props;
  const dispatch = useDispatch();

  const updateCurrentTask = () => {
    dispatch({ type: SET_CURRENT_TASK, payload: task});
  };

  const isCurrentTask = () => {
    if (currentTask && task) {
      return currentTask.id === task.id;
    }
    return false;
  };

  const handleChange = (data: Partial<TaskType>) => {
    onChange(task, data);
  }

  return (
    <div 
      className="tasks__row" 
      onClick={updateCurrentTask}
      style={isCurrentTask() ? { border: '.1rem solid steelblue'}: {}}
    >
      <div className="tasks__col">
        <Input 
          name="name"
          className="task__input"
          onChange={handleChange}
          value={task && task.name}
        />
        <p className="task__name">{task && task.name}</p>
      </div>
      <div className="tasks__col">
        <p className="task__name">{task && task.relatedFeature}</p>
      </div>
      <div className="tasks__col tasks__checkbox">
        <input
          name="started"
          className="checkbox"
          type="checkbox"
          onChange={() => null}
          checked={task && task.started}
        />
      </div>
      <div className="tasks__col tasks__checkbox">
        <input
          name="started"
          className="checkbox"
          type="checkbox"
          onChange={() => null}
          checked={task && task.blocked}
        />
      </div>
      <div className="tasks__col tasks__checkbox">
        <input
          name="completed"
          className="checkbox"
          type="checkbox"
          onChange={() => null}
          checked={task && task.completed}
        />
      </div>
      <div className="tasks__col tasks__completed-info">
        <p className="task__name">{task.completedDate?.toDateString()}</p>
      </div>
      <div className="tasks__col tasks__icon">
        {isCurrentTask() && <h1 className="tasks__icon--svg">></h1>}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const currentTask = getCurrentTask(state);
  return {
    currentTask,
  }
};

const dispatchProps = { };

export default connect(
  mapStateToProps,
  dispatchProps,
)(Task);
