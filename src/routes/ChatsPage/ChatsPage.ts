import { redirect } from "react-router-dom";
import { getChats } from "../../lib/api";
export async function loader() {
    const chats = await getChats();

    if (chats.status === "forbidden") {
        return redirect("/sign_in");
    }

    return chats.data;
}