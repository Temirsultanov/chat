import { useNavigate } from "react-router-dom";
import "./style.scss";
import { createChat } from "../../lib/api";

interface IProps {
  className?: string;
  username: string;
  name: string;
}

export const SearchResult = ({ className = "", username, name }: IProps) => {
  const navigate = useNavigate();
  async function buttonHandler() {
    const response = await createChat(username);
    if (response.status === "success") {
      navigate("/chat/" + response.data.chatId);
    }
  }

  return (
    <button
      onClick={buttonHandler}
      className={"searchResult text-l " + className}
    >
      <span className="searchResult__name">{name}</span>
      <span className="searchResult__username">@{username}</span>
      <Icon className="searchResult__icon" />
    </button>
  );
};

interface IIconProps {
  className?: string;
}

const Icon = ({ className }: IIconProps) => {
  return (
    <svg
      className={className}
      width="13"
      height="20"
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L11 10L2 18"
        stroke="#7D7D7D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
