import { FormType, IUser } from "../../common/consts/model";
import { ActionType } from "../action-types/index"

interface getUsers {
    type: ActionType.GET_ALL_USERS,
    payload: IUser[]
}
interface updateUsers {
    type: ActionType.UPDATE_USERS,
    payload: IUser[]
}
interface LoadForm {
    type: ActionType.LOAD_FORM,
    payload: FormType
}

export type Action = getUsers | updateUsers | LoadForm ;