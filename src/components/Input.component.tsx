import React from "react";
import Label from "./Label.component";
import { curry } from "ramda";

type InputProps = {
  className: string;
  disabled?: boolean;
  errorMessage?: string;
  focusOnLoad?: boolean;
  id?: string;
  label?: string;
  name: string;
  onBlur?: Function;
  onChange?: Function;
  placeholder?: string;
  type?: string;
  valid?: boolean;
  value: string | number;
};

export const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    disabled,
    errorMessage,
    id,
    label,
    name,
    onChange,
    onBlur,
    placeholder,
    type,
    valid = true,
    value,
  } = props;

  const handleChange = curry((event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    let data: {
      [key: string]: unknown;
    } = {};

    const value =
      type === "number" ? Number(event.target.value) : event.target.value;

    data[name] = value;
    onChange && onChange(data, name, value);
  });

  /* const getClassName = () => { */
  /*   if (className) return className; */
  /*   return valid ? 'form__input' : 'form__input form__input--error'; */
  /* }; */

  return (
    <div className="form__group">
      {label && <Label name={name} label={label} />}
      <input
        className={className}
        disabled={disabled}
        id={id ? id : name}
        name={name}
        onChange={handleChange}
        onBlur={() => onBlur && onBlur()}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {!valid && <p className="u-color-red">{errorMessage}</p>}
    </div>
  );
};

export default Input;
