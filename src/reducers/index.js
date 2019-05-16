
import { combineReducers } from 'redux';

const initState = {
    value: 0
}
const uerInfo = {
    isLogin: false,
    user: {name: '',age: 0}
}

function setUer(state = uerInfo, action) {
    switch (action.type) {
        case 'login':
            return {
                ...uerInfo,
                isLogin: true,
                user: action.user
            }
        case 'logout':
            return uerInfo;
        default:
            return state;
    }
}

function setNum(state = initState, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                value: action.value,
                status: 'add'
            }
        case 'cut':
            return {
                ...state,
                value: action.value,
                status: 'cut'
            }
        default:
            return state;
    }
}

export default combineReducers({
    numStore: setNum,
    userStore: setUer
})