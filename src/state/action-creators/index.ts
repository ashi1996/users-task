import { Dispatch  } from "redux"
import { IApiResponseModel, IAutoCompleteResponse, ICurrentConditionsResponse, INextFiveDaysResponse, likes_currentPlace } from "../../common/consts/model"
import { ERROR_API } from "../../common/consts/strings"
import { FETCH_AUTO_COMPLETE, FETCH_CURRENT_CONDITIONS, FETCH_NEXT_FIVE_DAYS } from "../../common/services/api"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"


export const getAutocomplete = (text: string) => {
    return async(dispatch: Dispatch<Action>) => {
        try{
            let data:IApiResponseModel<IAutoCompleteResponse[]> = await FETCH_AUTO_COMPLETE(text);
            dispatch({
                type: ActionType.AUTO_COMPLETE,
                payload: data
            })
        }catch(err){
            console.log(err);
            alert(ERROR_API);
        }
    }
}

export const getCurrentConditions = (UniqueId: string) => {
    return async(dispatch: Dispatch<Action>) => {
        try{
            const CURRENT_CONDITIONS :IApiResponseModel<ICurrentConditionsResponse[]> = await FETCH_CURRENT_CONDITIONS(UniqueId);
            const NEXT_FIVE_DAYS : IApiResponseModel<INextFiveDaysResponse> = await FETCH_NEXT_FIVE_DAYS(UniqueId);
            console.log(CURRENT_CONDITIONS);
            console.log(NEXT_FIVE_DAYS);
            dispatch({
                type: ActionType.GET_CURRENT_CONDITIONS,
                payload: {CURRENT_CONDITIONS, NEXT_FIVE_DAYS}
            })
        }catch(err){
            console.log(err);
            alert(ERROR_API);
        }
    }
}

export const updateCurrentPlace = (place: string , UniqueId: string) => {
    return (dispatch: Dispatch<Action>) => {
            dispatch({
                type: ActionType.UPDATE_CURRENT_PLACE,
                payload: {name:place, code:  UniqueId}
            })
    }
}

export const resetAutocomplete = () => {
    return (dispatch: Dispatch<Action>) => {
            dispatch({
                type: ActionType.RESET_AUTO_COMPLETE
            })
    }
}

export const saveLikesToLocal = (allLikes:Array<likes_currentPlace>) => {
    return (dispatch: Dispatch<Action>) => {
            dispatch({
                type: ActionType.SAVE_TO_LOCAL,
                payload:allLikes
            })
    }
}

export const addAnimationFavoriteLink = () => {
    return (dispatch: Dispatch<Action>) => {
            dispatch({
                type: ActionType.ADD_CLASS_ANIMATIONS_FAVORITE_LINK,
                payload:true
            })
            setTimeout(()=>{
                dispatch({
                    type: ActionType.ADD_CLASS_ANIMATIONS_FAVORITE_LINK,
                    payload:false
                })
            },1000)
    }
}
