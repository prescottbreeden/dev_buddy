import React from "react";
import { connect } from "react-redux";
import { getCurrentTask } from "../redux/selectors/tasks.selectors";
import { TaskType } from "../types/TaskType.type";
import {setTasks} from "../redux/actions/tasks.actions";

type fu = {
  task: TaskType;
}

const NotePad: React.FC<TaskType> = (props) => {
  const { notes } = props;

  return (
    <div className="notepad">
      <div className="notepad__header">
        <h3 className="notepad__title">Notepad</h3>
      </div>
      <textarea 
        onChange={() => null}
        className="notepad__notes"
        value={notes}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const task = getCurrentTask(state);
  console.log(task);
  return {
    ...task,
  }
}

const dispatchProps = {
  setTasks,
}

export default connect(
  mapStateToProps,
  dispatchProps
)(NotePad);
