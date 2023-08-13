import * as Types from "./types";

const API_URL = "http://127.0.0.1:8000/api/";
const API_ROUTER = {
    "sign_in": API_URL + "sign_in",
    "sign_up": API_URL + "sign_up",
    "chats": API_URL + "chats",
    "chat": API_URL + "chat/",
    "add_message": API_URL + "add_message",
    "info": API_URL + "info",
    "update_name": API_URL + "update_name",
    "exit": API_URL + "exit",
    "search_user": API_URL + "search_user/",
    "new_chat": API_URL + "new_chat/",
}

export async function signIn(login: Types.Login, password: Types.Password): Promise<Types.AuthResponse> {
    const response = await fetch(API_ROUTER["sign_in"], {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ login, password })
    })

    return await response.json();
}

export async function signUp(login: Types.Login, password: Types.Password): Promise<Types.AuthResponse> {
    const response = await fetch(API_ROUTER["sign_up"], {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ login, password })
    })

    return await response.json();
}

export async function getChats(): Promise<Types.ChatsResponse> {
    const response = await fetch(API_ROUTER.chats, {
        credentials: "include"
    });

    const chats = await response.json();
    return chats;
}

export async function getChat(chatId: Types.ID): Promise<Types.ChatResponse> {
    const response = await fetch(API_ROUTER.chat + chatId, {
        credentials: "include",
    });

    return await response.json();
}

export async function addMessage(chatId: Types.ID, content: Types.MessageContent): Promise<Types.MessageAdditionResponse>  {
    const response = await fetch(API_ROUTER.add_message, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({chatId, content})
    })

    const json = await response.json();
    return json;
}

export async function updateName(name: Types.UserName): Promise<Types.NameUpdatingResponse> {
    const response = await fetch(API_ROUTER.update_name, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ name })
    });

    return await response.json();
}

export async function exit(): Promise<Types.ExitResponse> {
    const response = await fetch(API_ROUTER.exit, {
        credentials: "include"
    })

    return await response.json();
}

export async function searchUser(searchString: Types.UserName): Promise<Types.UserSearchingResponse> {
    const response = await fetch(API_ROUTER.search_user + searchString, {
        credentials: "include"
    })

    return await response.json();
}

export async function createChat(username: Types.UserName): Promise<Types.CreatingChatResponse> {
    const response = await fetch(API_ROUTER.new_chat + username, {
        credentials: "include",
    })

    return await response.json();
}