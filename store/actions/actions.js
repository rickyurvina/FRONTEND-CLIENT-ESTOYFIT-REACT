import { 
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART,
    ADD_TO_COMPARE,
    REMOVE_ITEM_FROM_COMPARE,
    SIGNIN_USER,
    SIGNIN_USER_SUCCESS_DATA,
    LOGOUT,
    SHOW_MESSAGE,
    UPDATE_CITY
} from './action-types/action-names'

export const signinUser = (user) => {
    return {
        type: SIGNIN_USER,
        user
    }
}

export const signinSuccessUserData = (userData) => { 
    return {
        type: SIGNIN_USER_SUCCESS_DATA,
        userData
    }
}

export const logout = () => { 
    return {
        type: LOGOUT
    }
}

//Update city action action
export const updateCity = (city) => { 
    return {
        type: UPDATE_CITY,
        city
    }
}

export const showMessage = (message) => {
    return {
        type: SHOW_MESSAGE,
        message
    }
}

//add cart action
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

//add qt action with quantity number
export const addQuantityWithNumber = (id, qty) => {
    return {
        type: ADD_QUANTITY_WITH_NUMBER,
        id,
        qty
    }
}

// Reset cart after form submit
export const resetCart = () => {
    return {
        type: RESET_CART
    }
}

//add compare action
export const addToCompare = (id) => {
    return {
        type: ADD_TO_COMPARE,
        id
    }
}
//remove item from compare action
export const removeItemFromCompare = (id) => {
    return {
        type: REMOVE_ITEM_FROM_COMPARE,
        id
    }
}
