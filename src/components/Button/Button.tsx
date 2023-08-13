import { ReactNode, MouseEventHandler } from "react";
import "./style.scss";

type ButtonCategories = "auth" | "exit";

interface IProps {
  className?: string;
  children: ReactNode;
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  category?: ButtonCategories;
}

export const Button = ({
  className,
  children,
  clickHandler,
  disabled = false,
  category = "auth",
}: IProps) => {
  return (
    <button
      onClick={clickHandler}
      className={"button text-l " + className + " button-" + category}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
