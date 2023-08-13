import { MouseEventHandler } from "react";
import "./style.scss";

interface IProps {
  className?: string;
  children: React.ReactNode;
  clickHandler?: MouseEventHandler;
}

export const TetriaryButton = ({
  className,
  children,
  clickHandler,
}: IProps) => {
  return (
    <button
      onClick={clickHandler}
      className={"tetriaryButton text-l " + className}
    >
      {children}
    </button>
  );
};
