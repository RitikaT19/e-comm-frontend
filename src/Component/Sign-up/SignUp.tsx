import React, { useState } from "react";
import Button from "../common/Button/Button";
import { Textfield } from "../common/Textfield/Textfield";
import "../styles/sign-up.css";
import background from "../../assets/Icons/background.jpg";
import {isNameValid, isEmailValid, isPasswordValid} from "../../helpers/validate"

// define interface for the required props by the component
interface Props {
  handleSignUpButton: any;
  errorMessage: any;
  successMessage: any;
}
export const SignUp: React.FC<Props> = ({
  handleSignUpButton,
  errorMessage,
  successMessage,
}) => {
  // stores email
  const [email, setEmail] = useState<string>("");
  // stores email error
  const[emailError, setEmailError] = useState<string>("")
  // stores password
  const [password, setPassword] = useState<string>("");
  // stores password error
  const [passwordError, setPasswordError] = useState<string>("")
  // stores first name
  const [firstName, setFirstName] = useState<string>("");
  // stores firstName error
  const [firstNameError, setFirstNameError] = useState<string>("");
  // stores last name
  const [lastName, setLastName] = useState<string>("");
  // stores lastName error
  const [lastNameError, setLastNameError] = useState<string>("");
  // stores empty field error
  const [showEmptyFieldError, setShowEmptyFieldError] = useState(false);

  // function for verifying firstName
  const checkFirstName = async() =>{
    const verifyFirstNameResult = isNameValid(firstName)
    if(!verifyFirstNameResult){
      setFirstNameError("Enter a valid name")
    }
    else{
      setFirstNameError("")
    }
  }

  // function for verifying lastName
  const checkLastName = async() =>{
    const verifyLastNameResult = isNameValid(lastName)
    if(!verifyLastNameResult){
      setLastNameError("Enter a valid name")
    }
    else{
      setLastNameError("")
    }
  }

   // verifies email id
   const checkEmail = async() =>{
    const isEmailValidResult = isEmailValid(email)
    // give error message if email id not valid
    if(!isEmailValidResult){
      setEmailError("Please enter a valid email id")
    }else{
      // give error message if email is not provided
      setEmailError("")
    }
  }

  // verify password
  const checkPassword = async() =>{
    const isPasswordValidResult = isPasswordValid(password)
    if(!isPasswordValidResult){
      setPasswordError("Please enter valid password")
    }else{
      setPasswordError("")
    }
  }
  // function for when clickSignUpButton is called
  const clickSignUpButton = async () => {
    // if any of the parameter is missing, throw error
    if (!(firstName || lastName || email || password)) {
      setShowEmptyFieldError(true);
    } else {
      // call handleSignUpButton with data
      await handleSignUpButton({ firstName, lastName, email, password });
    }
  };
  return (
    <div className="sign-up-main-div">
      <img className="background" src={background} alt="background" />
      <div className="textfield-div">
        {/* heading for making a new admin */}
        <p className="sign-up-heading">Make a new Admin!</p>
        {/* input for first name */}
        <Textfield
          label="First name"
          placeholder="Enter first name"
          id="first_name"
          onChange={(e: any) => setFirstName(e.target.value)}
          value={firstName}
          error = {firstNameError}
          onBlur = {checkFirstName}
        />
        {/* input for last name */}
        <Textfield
          label="Last name"
          placeholder="Enter last name"
          id="last_name"
          onChange={(e: any) => setLastName(e.target.value)}
          value={lastName}
          error = {lastNameError}
          onBlur = {checkLastName}
        />
        {/* input for email */}
        <Textfield
          label="Email"
          placeholder="Enter email address"
          id="email"
          onChange={(e: any) => setEmail(e.target.value)}
          value={email}
          error = {emailError}
          onBlur = {checkEmail}
        />
        {/* input for password */}
        <Textfield
          label="Password"
          type="password"
          placeholder="Enter password here"
          id="password"
          onChange={(e: any) => setPassword(e.target.value)}
          value={password}
          error = {passwordError}
          onBlur = {checkPassword}
        />
        {/* if there is error, print the error message  */}
        {errorMessage ? (
          <p className="sign-in-error">{errorMessage}</p>
        ) : successMessage ? (
          <p className="sign-in-success">{successMessage}</p>
        ) : (
          showEmptyFieldError && (
            <p className="sign-in-error">Please fill all the fields</p>
          )
        )}
        <div className="sign_up_button_div">
          {/* Button for submitting sign up form */}
          <Button
            value="Make Admin"
            id="sign_up_button"
            handleClick={clickSignUpButton}
          />
        </div>
      </div>
    </div>
  );
};
