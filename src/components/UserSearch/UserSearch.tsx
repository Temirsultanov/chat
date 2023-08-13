import { useState, ChangeEvent } from "react";

import { LoginInput } from "../Input/Input";
import { TetriaryButton } from "../TetriaryButton/TetriaryButton";
import { ErrorText } from "../ErrorText/ErrorText";
import { SearchResult } from "../SearchResult/SearchResult";
import { Spinner } from "../Spinner/Spinner";

import { searchUser } from "../../lib/api";
import "./style.scss";

interface IProps {
  className?: string;
}

type User = {
  login: string;
  name: string;
};

export const UserSearch = ({ className }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [searchStr, setSearchStr] = useState("");

  async function inputHandler(event: ChangeEvent<HTMLInputElement>) {
    setSearchStr(event.target.value);
    setUsers([]);

    if (event.target.value !== "") {
      setLoading(true);
      const response = await searchUser(event.target.value.toLowerCase());

      if (Array.isArray(response.data)) {
        setUsers(response.data);
        setLoading(false);
      }
    }
  }

  function cancel() {
    setSearchStr("");
  }

  return (
    <>
      <div className={"userSearch " + className}>
        <form method="POST" className="userSearch__form">
          <LoginInput
            className={
              "userSearch__input" +
              (searchStr !== "" ? " userSearch__input-filled" : "")
            }
            inputHandler={inputHandler}
            value={searchStr}
            name="search"
            placeholder="введите username"
          />
        </form>
        <TetriaryButton
          clickHandler={cancel}
          className="userSearch__cancelButton"
        >
          Отмена
        </TetriaryButton>
      </div>
      <div
        className={
          "userSearch__response" +
          (searchStr !== "" ? " userSearch__response-show" : "")
        }
      >
        {loading ? (
          <Spinner className="userSearch__spinner" />
        ) : users.length > 0 ? (
          <ul className="userSearch__list">
            {users.map((user) => (
              <li key={user.login}>
                <SearchResult username={user.login} name={user.name} />
              </li>
            ))}
          </ul>
        ) : (
          <ErrorText className="userSearch__errorText">
            Пользователь не найден.
          </ErrorText>
        )}
      </div>
    </>
  );
};
