import { CurrentUser, UserName } from "../lib/types"

const actions = {
    setCurrentUser: "currentUser/set",
    removeCurrentUser: "currentUser/remove",
    updateCurrentUserName: "currentUser/updateName",
}

export const setCurrentUser = (currentUser: CurrentUser) => ({
    type: actions.setCurrentUser,
    payload: currentUser,
})

export const removeCurrentUser = () => ({
    type: actions.removeCurrentUser
})

export const updateCurrentUserName = (userName: UserName) => ({ 
    type: actions.updateCurrentUserName,
    payload: userName
})