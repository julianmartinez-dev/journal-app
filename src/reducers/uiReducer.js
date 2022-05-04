import { types } from "../types/types";

const initialState = {
    loading: false,
    msgError: null
}

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ui_start_loading:
            return {
                ...state,
                loading: true
            }
        case types.ui_finish_loading:
            return {
                ...state,
                loading: false
            }
        case types.ui_set_error:
            return {
                ...state,
                msgError: action.payload
            }
        case types.ui_clear_error:
            return {
                ...state,
                msgError: null
            }
        default:
            return state;
    }
}

export default uiReducer;