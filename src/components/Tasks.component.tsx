import React from 'react';
import Task from './Task.component';
import {connect} from 'react-redux';

export interface TaskType {
  name: string;
  relatedFeature: string;
  priority: number;
  started: boolean;
  completed: boolean;
  startDate?: Date;
  completedDate?: Date;
};

type TasksProps = {
  tasks?: TaskType[];
}
const Tasks: React.FC<TasksProps> = (props) => {
  const { tasks } = props;

  return (
    <div className="tasks">
      <div className="tasks__row">
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
          <p className="tasks__title">Completed</p>
        </div>
        <div className="tasks__col tasks__completed-info">
          <p className="tasks__title">Completed on</p>
        </div>
      </div>
      {tasks && tasks.map((task: any) => {
        return <Task {...task} />;
      })}
    </div>
  )
}

const mapStateToProps = () => {
  const tasks: TaskType[] = [
    { 
      name: 'dingoes',
      relatedFeature: 'dashboard',
      priority: 1,
      started: true,
      completed: true,
      startDate: new Date(Date.now()),
      completedDate: new Date(Date.now()),
    },
    {
      name: 'llamas',
      relatedFeature: 'dashboard',
      priority: 1,
      started: true,
      completed: false,
      completedDate: undefined,
    },
    { 
      name: 'flamingos',
      relatedFeature: 'dashboard',
      priority: 1,
      started: false,
      completed: false,
      completedDate: undefined,
    },
  ]
  return {
    tasks
  }
}

export default connect(mapStateToProps, null)(Tasks);
