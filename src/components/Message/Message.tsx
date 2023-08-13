import "./style.scss";

interface IProps {
  isMyMessage: boolean;
  text: string;
}

export const Message = ({ isMyMessage, text }: IProps) => {
  return (
    <p className={"message text-l" + (isMyMessage ? " message-my" : "")}>
      {" "}
      {text}{" "}
    </p>
  );
};
