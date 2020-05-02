import React from 'react';
import {TaskType} from './Tasks.component';

const Task: React.FC<TaskType> = (props) => {
  const {
    name,
    relatedFeature,
    started,
    completed,
    completedDate
  } = props;

  return (
    <div className="tasks__row">
      <div className="tasks__col">
        <p className="task__name">{name}</p>
      </div>
      <div className="tasks__col">
        <p className="task__name">{relatedFeature}</p>
      </div>
      <div className="tasks__col tasks__checkbox">
        <input
          name="started"
          className="checkbox"
          type="checkbox"
          onChange={() => null}
          checked={started}
        />
      </div>
      <div className="tasks__col tasks__checkbox">
        <input
          name="completed"
          className="checkbox"
          type="checkbox"
          onChange={() => null}
          checked={completed}
        />
      </div>
      <div className="tasks__col">
        <p className="task__name">{completedDate?.toDateString()}</p>
      </div>
    </div>
  )
}

export default Task;
