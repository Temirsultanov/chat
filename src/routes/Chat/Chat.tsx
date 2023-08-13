import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";

import { Input } from "../../components/Input/Input";
import { SendButton } from "../../components/SendButton/SendButton";
import { Message } from "../../components/Message/Message";

import "./style.scss";
import { Chat as TChat } from "../../lib/types";

export const Chat = () => {
  const [socket, setSocket] = useState<WebSocket>();
  const chat = useLoaderData() as TChat;
  const [messages, setMessages] = useState(chat.messages);
  const [messageStr, setMessageStr] = useState("");

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMessageStr(e.target.value);
  };

  const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket?.send(
      JSON.stringify({
        status: "new_message",
        data: {
          login: chat.my_username,
          chatId: chat.id,
          text: messageStr,
        },
      })
    );
    setMessageStr("");
  };

  useEffect(() => {
    setSocket(new WebSocket("ws://localhost:9000"));
  }, []);

  useEffect(() => {
    if (socket) {
      socket.onmessage = function (event: MessageEvent) {
        const response = event.data;
        const messages = JSON.parse(response);
        setMessages(messages);
      };
    }

    return () => {
      socket?.close();
    };
  }, [socket]);

  return (
    <>
      <header className="chat__header">
        <BackButton className="chat__backButton" />
        <h1 className="h2 chat__name">{chat.name}</h1>
      </header>
      <ul className="chat__messages">
        {messages.map((message) => (
          <li
            key={message.id}
            className={
              message.username === chat.my_username
                ? "chat__message chat__message-my"
                : "chat__message"
            }
          >
            <Message
              isMyMessage={message.username === chat.my_username}
              text={message.content}
            />
          </li>
        ))}
      </ul>
      <form
        className="chat__messageAddition"
        method="POST"
        onSubmit={formSubmitHandler}
      >
        <Input
          className="chat__messageInput"
          placeholder="Сообщение"
          inputHandler={inputHandler}
          value={messageStr}
          name="message"
        />
        <SendButton disabled={messageStr === ""} type="submit" />
      </form>
    </>
  );
};

interface IBackButton {
  className?: string;
}

const BackButton = ({ className }: IBackButton) => {
  return (
    <Link to="/" className={"backButton " + className}>
      <svg
        width="13"
        height="20"
        viewBox="0 0 13 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 18L2 10L11 2"
          stroke="#7D7D7D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};
