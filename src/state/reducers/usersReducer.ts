import { InitialState } from "../../common/consts/model";
import { ActionType } from "../action-types/index"
import { Action } from "../actions"


const initialState:InitialState = {
    allUsers:[],
    modalLoadForm: null
};

const reducer = (state: InitialState = initialState, action: Action): InitialState => {
    switch (action.type){
        case ActionType.GET_ALL_USERS:
            return {...state, allUsers: action.payload};
        case ActionType.UPDATE_USERS:
            return {...state, allUsers: action.payload};
        case ActionType.LOAD_FORM:
            return {...state, modalLoadForm: action.payload};
        default:
            return state;
    }
}

export default reducer