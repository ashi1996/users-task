import { IApiResponseModel, IAutoCompleteResponse, ICurrentConditionsResponse, INextFiveDaysResponse, likes_currentPlace } from "../../common/consts/model"
import { ActionType } from "../action-types/index"

interface autoComplete {
    type: ActionType.AUTO_COMPLETE,
    payload: IApiResponseModel<IAutoCompleteResponse[]>
}
interface getCurrentConditions {
    type: ActionType.GET_CURRENT_CONDITIONS,
    payload: {CURRENT_CONDITIONS:IApiResponseModel<ICurrentConditionsResponse[]>, NEXT_FIVE_DAYS: IApiResponseModel<INextFiveDaysResponse>} 
}
interface updateCurrentPlace {
    type: ActionType.UPDATE_CURRENT_PLACE,
    payload: {name:string, code:  string}
}
interface resetAutocomplete {
    type: ActionType.RESET_AUTO_COMPLETE
}
interface saveToLocal {
    type: ActionType.SAVE_TO_LOCAL,
    payload: likes_currentPlace[]
}
interface addAnimationToFavoriteLink {
    type: ActionType.ADD_CLASS_ANIMATIONS_FAVORITE_LINK,
    payload: boolean
}

export type Action = autoComplete | getCurrentConditions | updateCurrentPlace |resetAutocomplete |saveToLocal | addAnimationToFavoriteLink;