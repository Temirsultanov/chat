import { useState, FormEvent, ChangeEventHandler } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../Button/Button";
import { Input, LoginInput } from "../Input/Input";
import { Label } from "../Label/Label";
import { ErrorText } from "../ErrorText/ErrorText";

import "../Auth/style.scss";

import { signUp } from "../../lib/api";
import { sha256 } from "../../lib/crypto";

export const SignUpForm = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameInputHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.target.value);
    setError("");
    setButtonDisabled(e.target.value === "" || password === "");
  };

  const passwordInputHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
    setError("");
    setButtonDisabled(username === "" || e.target.value === "");
  };

  async function sendData(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const passwordHash = await sha256(password);
    const response = await signUp(username, passwordHash);
    console.log(response);
    if (response.status === "signed_in" || response.status === "signed_up") {
      navigate("/");
    } else {
      setError(response.status);
      setButtonDisabled(true);
    }
  }

  return (
    <form method="POST" className="authForm box" onSubmit={sendData}>
      <Label
        className="authForm__label"
        htmlFor="signUpForm-login"
        value="Имя пользователя"
        description="Доступные символы: [a-z0-9_]"
      />
      <LoginInput
        inputHandler={usernameInputHandler}
        className="authForm__input"
        name="username"
        id="signUpForm-login"
        placeholder="username"
      />
      <ErrorText
        className="authForm__error authForm__error-password"
        show={error === "invalid_login"}
      >
        Username должен содержать от 4 до 32 символов [a-z0-9_].
      </ErrorText>
      <ErrorText
        className="authForm__error authForm__error-password"
        show={error === "login_is_taken"}
      >
        Username занят.
      </ErrorText>
      <Label
        className="authForm__label authForm__label-signUpPassword"
        htmlFor="signUpForm-password"
        value="Пароль"
      />
      <Input
        inputHandler={passwordInputHandler}
        className="authForm__input"
        name="password"
        id="signUpForm-password"
        placeholder="Пароль"
        type="password"
      />
      <ErrorText
        className="authForm__error authForm__error-password"
        show={error === "invalid_password"}
      >
        Пароль неправильного формата.
      </ErrorText>
      <Button disabled={buttonDisabled}>Зарегистрироваться</Button>
    </form>
  );
};
