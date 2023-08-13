export type ID = number;
export type Login = string;
export type UserName = string;
export type Token = string;
export type MessageContent = string;
export type Password = string;

export interface User {
    login: Login;
    name: UserName;
}

export interface CurrentUser extends User {
    token: Token;
}

export interface ChatPreview {
    id: ID,
    name: UserName,
    lastMessage: MessageContent
}

export interface Chat {
    id: ID;
    name: UserName;
    messages: Message[]
}

export interface Message {
    id: ID;
    login: Login;
    content: MessageContent;
}

type ResponseDataWithMessage = { message: string; }
enum RS {
    success = "success",
    forbidden = "forbidden",
    allowed = "allowed",
    chatIsNotExist = "chat_is_not_exist",
    dataLost = "data_lost",
    loginIsTaken = "login_is_taken",
    signedUp = "signed_up",
    signedIn = "signed_in",
    invalidLogin = "invalid_login",
    invalidPassword = "invalid_password",
}

export type AuthResponse = { 
    status: RS.dataLost | RS.loginIsTaken  | RS.invalidLogin | RS.invalidPassword,
    data: ResponseDataWithMessage 
} | {
    status: RS.signedIn | RS.signedUp,
    data: object;
};

export type ChatsResponse = { 
    status: RS.forbidden, 
    data: ResponseDataWithMessage
} | { 
    status: RS.success, 
    data: ChatPreview[] 
}

export type ChatResponse = {
    status: RS.chatIsNotExist | RS.forbidden,
    data: ResponseDataWithMessage
} | {
    status: RS.success,
    data: Chat
};

export type MessageAdditionResponse = {
    status: RS.dataLost | RS.forbidden | RS.success,
    data: ResponseDataWithMessage
};

export type NameUpdatingResponse = {
    status: RS.dataLost | RS.forbidden | RS.success,
    data: ResponseDataWithMessage
};

export type ExitResponse = {
    status: RS.success,
    data: ResponseDataWithMessage
};

export type UserSearchingResponse = {
    status: RS.success,
    data: User[]
}

export type CreatingChatResponse = {
    status: RS.success,
    data: ID,
};