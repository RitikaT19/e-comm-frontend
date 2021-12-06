import React from "react";
// import "../../styles/checkbox.css";
interface Props {
  label?: string;
  checked?: boolean;
  id: string;
  handleChange:
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
    | undefined;
  value?: string;
}

export const CheckBox: React.FC<Props> = ({
  label,
  id,
  checked,
  handleChange,
  value,
}) => {
  return (
    <label className="container-checkbox" htmlFor={id + "_element"}>
      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        id={id + "_element"}
        checked={checked}
        value={value}
      />
      <span className="label-text">{label}</span>
    </label>
  );
};
