import React from "react";
import { connect, useDispatch } from "react-redux";
import { TaskType } from "../types/TaskType.type";
import { getTasks } from "../redux/selectors/tasks.selectors";
import {  mergeObjects, insertItem } from "../util/misc";
import { SET_TASKS } from "../redux/actions/tasks.actions";
import Task from "./Task.component";
import {pipe} from "ramda";

type TasksProps = {
  tasks: TaskType[];
};
const Tasks: React.FC<TasksProps> = (props) => {
  const dispatch = useDispatch();
  const { tasks } = props;

  /* const handleTaskChange = generateOnChange(tasks, "id", dispatch, SET_TASKS); */
  const generateHandleChange = (allTasks: TaskType[]) => (task: TaskType) => (
    data: Partial<TaskType>
  ) => {
    const mergeAndUpsert = pipe(
      mergeObjects<TaskType>(task),
      insertItem<TaskType>(allTasks, "id")
    );

    dispatch({
      type: SET_TASKS,
      payload: mergeAndUpsert(data),
    });
  };

  const handleTaskChange = generateHandleChange(tasks);

  return (
    <div className="tasks">
      <div className="tasks__header">
        <div className="tasks__col">
          <p className="tasks__title">Tasks to complete</p>
        </div>
        <div className="tasks__col">
          <p className="tasks__title">Related Feature</p>
        </div>
        <div className="tasks__col tasks__checkbox">
          <p className="tasks__title">Started</p>
        </div>
        <div className="tasks__col tasks__checkbox">
          <p className="tasks__title">Blocked</p>
        </div>
        <div className="tasks__col tasks__checkbox">
          <p className="tasks__title">Completed</p>
        </div>
        <div className="tasks__col tasks__completed-info">
          <p className="tasks__title">Completed on</p>
        </div>
        <div className="tasks__col tasks__icon">
          <p className="tasks__title">Active</p>
        </div>
      </div>
      {tasks &&
        tasks.map((task: any, index: number) => {
          return <Task key={index} task={task} onChange={handleTaskChange} />;
        })}
      <div className="tasks__col">
        <button className="tasks__add-btn">+</button>
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
