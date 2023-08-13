import { Link } from "react-router-dom";
import "./style.scss";

interface IProps {
  chatId: number;
  name: string;
  message: string;
}

export const ChatLink = ({ chatId, name, message }: IProps) => {
  return (
    <Link className="chatLink text-l" to={"/chat/" + chatId}>
      <h2 className="chatLink__name">{name}</h2>
      <p className="chatLink__message">{message}</p>
    </Link>
  );
};
