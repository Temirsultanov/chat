import { useState, ChangeEvent } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import { TetriaryButton } from "../../components/TetriaryButton/TetriaryButton";
import { Label } from "../../components/Label/Label";
import { Input } from "../../components/Input/Input";

import "./style.scss";
import { CurrentUser } from "../../lib/types";
import { exit, updateName } from "../../lib/api";

export const Settings = () => {
  const navigate = useNavigate();
  const user = useLoaderData() as CurrentUser;
  const [username, setUsername] = useState(user.name);

  function usernameInputHandler(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function cancelButtonHandler() {
    navigate("/");
  }

  function saveButtonHandler() {
    updateName(username);
    navigate("/");
  }

  function exitButtonHandler() {
    exit();
    navigate("/sign_in");
  }

  return (
    <section className="settings">
      <header className="settings__header">
        <TetriaryButton clickHandler={cancelButtonHandler}>
          Отмена
        </TetriaryButton>
        <TetriaryButton clickHandler={saveButtonHandler}>
          Сохранить
        </TetriaryButton>
      </header>
      <form className="settings__name">
        <Label
          className="settings__nameLabel"
          htmlFor="settings-name"
          value="Имя в чатах"
        />
        <Input
          className="settings__nameInput"
          name="username"
          inputHandler={usernameInputHandler}
          id="settings-name"
          value={username}
          placeholder="Имя"
          category="chatName"
        />
      </form>
      <div className="settings__username">
        <p className="h2">Имя пользователя</p>
        <p className="text-l">@{user.login}</p>
      </div>

      <Button
        clickHandler={exitButtonHandler}
        className="settings__exitButton"
        category="exit"
      >
        Выйти из аккаунта
      </Button>
    </section>
  );
};
