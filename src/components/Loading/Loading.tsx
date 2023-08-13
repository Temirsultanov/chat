import { Spinner } from "../Spinner/Spinner";
import "./style.scss";

interface IProps {
  load: boolean;
}

export const Loading = ({ load }: IProps) => {
  return (
    <div
      className={`loading__backdrop ${load ? "loading__backdrop-show" : ""}`}
    >
      <Spinner />
    </div>
  );
};
