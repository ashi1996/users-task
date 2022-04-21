import { InitialState } from "../../common/consts/model";
import { INIT_CITY_CODE, INIT_CITY_NAME, LOCAL_KEY } from "../../common/consts/strings";
import { ActionType } from "../action-types/index"
import { Action } from "../actions"


const initialState:InitialState = {
  autoComplete:[],
  likes:[],
  currentConditions:{},
  nextFiveDays:{},
  currentPlace: {name:INIT_CITY_NAME, code:INIT_CITY_CODE},
  favoritesClassAnimation: false
};

const reducer = (state: InitialState = initialState, action: Action): any => {
    switch (action.type){
        case ActionType.AUTO_COMPLETE:
            return {...state, autoComplete:action.payload};
        case ActionType.GET_CURRENT_CONDITIONS:
            return {...state, currentConditions:action.payload.CURRENT_CONDITIONS[0] , nextFiveDays:action.payload.NEXT_FIVE_DAYS};
        case ActionType.UPDATE_CURRENT_PLACE:
            return {...state, currentPlace:action.payload};
        case ActionType.RESET_AUTO_COMPLETE:
            return {...state, autoComplete:[]};
        case ActionType.SAVE_TO_LOCAL:
            return saveToLocal({...state, likes:action.payload});
        case ActionType.ADD_CLASS_ANIMATIONS_FAVORITE_LINK:
            return {...state, favoritesClassAnimation: action.payload};
        default:
            return(localStorage[LOCAL_KEY]) ? {...state, likes:JSON.parse(localStorage[LOCAL_KEY])} : state;
    }
}

export default reducer

const saveToLocal = (stateTOSave:any) => {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(stateTOSave.likes));
  return stateTOSave;
}