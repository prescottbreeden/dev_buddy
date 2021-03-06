import React from "react";
import { connect, useDispatch } from "react-redux";
import { TaskType, emptyTask } from "../types/TaskType.type";
import { getTasks } from "../redux/selectors/tasks.selectors";
import { buildOnChange } from "../util/misc";
import { setTasks } from "../redux/actions/tasks.actions";
import Task from "./Task.component";
import Icon from "./Icon.component";

type TasksProps = {
  tasks: TaskType[];
};
const Tasks: React.FC<TasksProps> = (props) => {
  const dispatch = useDispatch();
  const { tasks } = props;

  const onChange = buildOnChange<TaskType>(tasks, "id", setTasks, dispatch);

  const createTask = () => {
    const updated = [...tasks, emptyTask()];
    dispatch(setTasks(updated));
  }

  return (
    <div className="tasks">
      <div className="tasks__header">
        <div className="tasks__col tasks__description">
          <p className="tasks__title">Tasks to complete</p>
        </div>
        <div className="tasks__options">
          <div className="tasks__col tasks__time">
            <p className="tasks__title">Work Effort</p>
          </div>
          <div className="tasks__col tasks__actions">
            <p className="tasks__title">Actions</p>
          </div>
        </div>
      </div>
      {tasks &&
        tasks.map((task: any, index: number) => {
          return <Task key={index} task={task} onChange={onChange} />;
        })}
      <div className="tasks__col tasks__icon--add">
        <div onClick={createTask} className="tasks__icon--btn">
          <Icon title="add" className="tasks__icon--svg add"/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const tasks = getTasks(state);

  return {
    tasks,
  };
};

export default connect(mapStateToProps)(Tasks);
