import React from "react";
import { connect } from "react-redux";
import { TaskType } from "../types/TaskType.type";
import Task from "./Task.component";
import {getTasks} from "../redux/selectors/tasks.selectors";

type TasksProps = {
  tasks?: TaskType[];
};
const Tasks: React.FC<TasksProps> = (props) => {
  const { tasks } = props;

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
          return <Task key={index} index={index} task={task} />;
        })}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const tasks = getTasks(state);

  return {
    tasks,
  };
};

export default connect(mapStateToProps, null)(Tasks);
