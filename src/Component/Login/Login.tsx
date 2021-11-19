import React, { useState } from "react";
import Button from "../../common/Button/Button";
import { Textfield } from "../../common/Textfield/Textfield";
import "../../styles/login.css";

interface Props {
    clickLoginButton: any
}
export const Login: React.FC<Props> = ({clickLoginButton}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleEmailChange = {};
  const handlePasswordChange = {};
  return (
    <div className="login-main-div">
      <div className="textfield-div">
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
        <div className = "login_button_div">
            <Button
            value = "Login"
            id = "login_button"
            handleClick = {clickLoginButton}
            />
        </div>
      </div>
    </div>
  );
};
