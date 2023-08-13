import { getChat } from "../../lib/api";
import { redirect } from "react-router-dom";

interface Params {
    chatId?: number;
}

export async function loader({ params }: { params: Params }) {
    const { chatId } = params;
    const response = await getChat(chatId || -1);

    if (response.status !== "success") {
        return redirect("/sign_in");
    }  

    return response.data;
}