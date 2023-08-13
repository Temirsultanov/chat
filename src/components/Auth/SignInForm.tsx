import { useState, FormEvent, ChangeEventHandler } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../Button/Button";
import { Input, LoginInput } from "../Input/Input";
import { ErrorText } from "../ErrorText/ErrorText";

import "../Auth/style.scss";

import { signIn } from "../../lib/api";
import { sha256 } from "../../lib/crypto";

export const SignInForm = () => {
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
    const response = await signIn(username, passwordHash);

    if (response.status === "signed_in") {
      navigate("/");
    } else {
      setError(response.status);
      setButtonDisabled(true);
    }
  }

  return (
    <form
      action="http://127.0.0.1:8000/api/sign_in"
      method="POST"
      className="authForm box"
      onSubmit={sendData}
    >
      <LoginInput
        inputHandler={usernameInputHandler}
        className="authForm__input"
        name="login"
        placeholder="username"
      />
      <ErrorText className="authForm__error" show={error === "user_not_exist"}>
        Пользователя с таким username нет.
      </ErrorText>
      <ErrorText className="authForm__error" show={error === "invalid_login"}>
        Username должен содержать от 4 до 32 символов [a-z0-9_].
      </ErrorText>
      <Input
        inputHandler={passwordInputHandler}
        className="authForm__input authForm__input-signInPassword"
        name="password"
        placeholder="Пароль"
        type="password"
      />
      <ErrorText
        className="authForm__error authForm__error-password"
        show={error === "incorrect_password"}
      >
        Пароль введён неверно.
      </ErrorText>
      <ErrorText
        className="authForm__error authForm__error-password"
        show={error === "invalid_password"}
      >
        Пароль неправильного формата.
      </ErrorText>
      <Button disabled={buttonDisabled}>Войти</Button>
    </form>
  );
};
