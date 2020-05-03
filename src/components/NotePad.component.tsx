import React from "react";

const NotePad: React.FC = () => {
  return (
    <div className="notepad">
      <div className="notepad__header">
        <h3 className="notepad__title">Notepad</h3>
      </div>
      <div className="notepad__notes">
        These are my notes... There are many notes like them... But these are my
        notes...
      </div>
    </div>
  );
};

export default NotePad;
