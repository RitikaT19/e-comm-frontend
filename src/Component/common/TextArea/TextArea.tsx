import React, { useState } from "react";
import "../../styles/text-area.css";

interface Props {
  value: any;
  placeholder: string;
  onChange: any;
  label: string;
  id: string;
  error?: string;
  underlineTextArea?: boolean;
  onBlur?: () => void;
}
export const TextArea: React.FC<Props> = ({
  label,
  value,
  placeholder,
  onChange,
  id,
  error,
  underlineTextArea,
  onBlur,
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  console.log(error);
  return (
    <div className="textarea-container">
      {label && <label htmlFor="input-area">{label}</label>}
      <div className = "textarea-div">
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        id={id + "_element"}
        className="textarea-div"
        onBlur={onBlur ? onBlur : () => setFocus(false)}
      />

      {error ? (
        <span
          className={
            !underlineTextArea
              ? "input-error-message"
              : "input-error-message-underline"
          }
          id={"error-message" + id}
          key={error}
        >
          {error}
        </span>
      ) : null}
      </div>
    </div>
  );
};
