import React from "react";

type DateInputProps = {
  name: string;
  value: number;
  onChange?: Function;
};

const DateInput: React.FC<DateInputProps> = (props) => {
  const { name, value } = props;
  return (
    <div className="date-input">
      <input
        className="date-input__input"
        name={name}
        type="text"
        value={value}
        onChange={() => null}
      />
      <label className="date-input__label" htmlFor="">
        {name}
      </label>
    </div>
  );
};

export default DateInput;
