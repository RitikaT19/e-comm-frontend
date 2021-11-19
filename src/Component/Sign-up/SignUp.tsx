import React, { useState } from "react";
import Button from "../../common/Button/Button";
import { Textfield } from "../../common/Textfield/Textfield";
import "../../styles/sign-up.css";

interface Props {
  clickSignUpButton: any;
}
export const SignUp: React.FC<Props> = ({ clickSignUpButton }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("")

  const handleEmailChange = {};
  const handlePasswordChange = {};
  return (
    <div className="sign-up-main-div">
      <div className="textfield-div">
        <Textfield
          label="First name"
          placeholder="Enter first name"
          id="first_name"
          onChange={(e: any) => setFirstName(e.target.value)}
          value={firstName}
        />

        <Textfield
          label="Last name"
          placeholder="Enter last name"
          id="last_name"
          onChange={(e: any) => setLastName(e.target.value)}
          value={lastName}
        />
        <Textfield
          label="Email"
          placeholder="Enter email address"
          id="email"
          onChange={(e: any) => setEmail(e.target.value)}
          value={email}
        />

        <Textfield
          label="Password"
          type="password"
          placeholder="Enter password here"
          id="password"
          onChange={(e: any) => setPassword(e.target.value)}
          value={password}
        />
        <div className="sign_up_button_div">
          <Button
            value="Sign up"
            id="sign_up_button"
            handleClick={clickSignUpButton}
          />
        </div>
      </div>
    </div>
  );
};
