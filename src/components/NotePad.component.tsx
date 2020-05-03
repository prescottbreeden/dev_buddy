import React, { useState } from "react";
import { connect } from "react-redux";
import { getCurrentTask } from "../redux/selectors/tasks.selectors";
import { TaskType } from "../types/TaskType.type";
import { setTasks } from "../redux/actions/tasks.actions";

type NotePadProps = {
  task: TaskType;
};
const NotePad: React.FC<NotePadProps> = (props) => {
  const { task } = props;

  const [card, setCard] = useState("stats");
  const cards = ["description", "notes", "stats"];

  const handleCardChange = (view: string) => {
    if (card === view) {
      const index = cards.indexOf(view);
      /* console.log('current card', card); */
      /* console.log('view', view) */
      /* console.log('index', index); */
      if (index > -1 && index < cards.length - 1) {
        setCard(cards[index + 1]);
      }
    } else {
      setCard(view);
    }
  };

  const viewCard = (view: string) => {
    return card === view
      ? { flexGrow: 1 }
      : { height: 0, overflow: "hidden", padding: 0, border: "none" };
  };

  return (
    <div className="notepad">
      <div
        className="notepad__header"
        onClick={() => handleCardChange("description")}
      >
        <h3 className="notepad__title">Description</h3>
      </div>
      <textarea
        onChange={() => null}
        className="notepad__description"
        value={task && task.description}
        style={viewCard("description")}
      />
      <div
        className="notepad__header"
        onClick={() => handleCardChange("notes")}
      >
        <h3 className="notepad__title">Notepad</h3>
      </div>
      <textarea
        onChange={() => null}
        className="notepad__notes"
        value={task && task.notes}
        style={viewCard("notes")}
      />
      <div
        className="notepad__header"
        onClick={() => handleCardChange("stats")}
      >
        <h3 className="notepad__title">Stats</h3>
      </div>
      <div className="notepad__stats" style={viewCard("stats")}>
        stats
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const task = getCurrentTask(state);
  return {
    task,
  };
};

const dispatchProps = {
  setTasks,
};

export default connect(mapStateToProps, dispatchProps)(NotePad);
