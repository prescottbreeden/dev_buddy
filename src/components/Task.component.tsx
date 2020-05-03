import React from "react";
import { TaskType } from "../types/TaskType.type";

interface TaskProps extends TaskType {
  index: any;
}

const Task: React.FC<TaskProps> = (props) => {
  const {
    blocked,
    name,
    relatedFeature,
    started,
    completed,
    completedDate,
    index,
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
          name="started"
          className="checkbox"
          type="checkbox"
          onChange={() => null}
          checked={blocked}
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
      <div className="tasks__col tasks__completed-info">
        <p className="task__name">{completedDate?.toDateString()}</p>
      </div>
      <div className="tasks__col tasks__icon">
        {index === 0 && <h1 className="tasks__icon--svg">></h1>}
      </div>
    </div>
  );
};

export default Task;
