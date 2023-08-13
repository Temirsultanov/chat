import { useLoaderData } from "react-router-dom";

import { UserSearch } from "../../components/UserSearch/UserSearch";
import { SettingsLink } from "../../components/SettingsLink/SettingsLink";
import { ChatLink } from "../../components/ChatLink/ChatLink";

import { ChatLink as TChatLink } from "../../lib/types";
import "./style.scss";

export const ChatsPage = () => {
  const chats = useLoaderData() as TChatLink[];

  return (
    <>
      <UserSearch className="chats__userSearch" />
      <ul className="chats__list">
        {chats.map((chat) => (
          <li key={chat.id}>
            <ChatLink
              chatId={chat.id}
              name={chat.name}
              message={chat.message}
            />
          </li>
        ))}
      </ul>
      <SettingsLink className="chats__settingsLink" />
    </>
  );
};
