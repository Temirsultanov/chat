import { ChangeEventHandler } from "react";
import "./style.scss";

type Type = "text" | "password";

interface IInputProps {
  className?: string;
  inputHandler?: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  value?: string;
  type?: Type;
  id?: string;
  name: string;
  category?: "chatName";
}

export const Input = ({
  className,
  inputHandler,
  placeholder,
  value,
  type = "text",
  id,
  name,
  category,
}: IInputProps) => {
  return (
    <input
      className={
        "input text-l " +
        (category === "chatName" ? "input-chatName " : "") +
        className
      }
      onInput={inputHandler}
      placeholder={placeholder}
      value={value}
      type={type}
      name={name}
      id={id}
      autoComplete="off"
    />
  );
};

interface ILoginInputProps {
  className?: string;
  inputHandler?: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  value?: string;
  id?: string;
  name: string;
}

export const LoginInput = ({
  className,
  inputHandler,
  placeholder,
  value,
  id,
  name,
}: ILoginInputProps) => {
  return (
    <div className={"loginInput " + className}>
      <Input
        inputHandler={inputHandler}
        placeholder={placeholder}
        value={value}
        type="text"
        name={name}
        id={id}
      />
      <span className="loginInput__icon text-l">@</span>
    </div>
  );
};
