import { createBrowserRouter } from "react-router-dom";

import { SignIn } from "./SignIn.tsx";
import { SignUp } from "./SignUp.tsx";
import { ErrorPage } from "./ErrorPage.tsx";

import { Settings } from "./Settings/Settings.tsx";
import { loader as settingsLoader } from "./Settings/Settings.ts";

import { ChatsPage } from "./ChatsPage/ChatsPage.tsx";
import { loader as chatsLoader } from "./ChatsPage/ChatsPage.ts";

import { Chat } from "./Chat/Chat.tsx";
import { loader as chatLoader } from "./Chat/Chat.ts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ChatsPage />,
    loader: chatsLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "sign_in",
    element: <SignIn />,
  },
  {
    path: "sign_up",
    element: <SignUp />,
  },
  {
    path: "chat/:chatId",
    loader: chatLoader,
    element: <Chat />,
  },
  {
    path: "settings",
    loader: settingsLoader,
    element: <Settings />,
  },
]);
