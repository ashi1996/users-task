import { Dispatch  } from "redux"
import { FormType, IApiResponseModel, IUser } from "../../common/consts/model"
import { ERROR_API } from "../../common/consts/strings"
import { FETCH_ALL_USERS } from "../../common/services/api"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"
import { v4 as uuidv4 } from 'uuid';


export const getAllUsers = (numberResults:string) => {
    return async(dispatch: Dispatch<Action>) => {
        try{
            let {results}:IApiResponseModel<IUser[]> = await FETCH_ALL_USERS(numberResults);
            results.map((user: IUser, i:number)=>{
                user.UUid = uuidv4();
            })
            console.log(results)
            dispatch({
                type: ActionType.GET_ALL_USERS,
                payload: results
            })
        }catch(err){
            alert(ERROR_API);
        }
    }
}

export const updateUsers = (users:IUser[]) => {
    return (dispatch: Dispatch<Action>) => {
            dispatch({
                type: ActionType.UPDATE_USERS,
                payload: users
            })
    }
}

export const loadForm = (formName: FormType) => {
    return (dispatch: Dispatch<Action>) => {
            dispatch({
                type: ActionType.LOAD_FORM,
                payload: formName
            })
    }
}
