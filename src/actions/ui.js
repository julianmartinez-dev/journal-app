import { types } from "../types/types"

const setError = (error) => {
    return {
        type: types.ui_set_error,
        payload: error
    }
}

const clearError = () => {
    return {
        type: types.ui_clear_error
    }
}

const startLoading = () => {
    return {
        type: types.ui_start_loading
    }
}

const finishLoading = () => {
    return {
        type: types.ui_finish_loading
    }
}

export {
    setError,
    clearError,
    startLoading,
    finishLoading
}