import { userConstants } from '../constants'
import { isError } from 'util';

export const users = (state ={}, action) => {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
            }
        case userConstants.GETALL_SUCCESS:
            return {
                items: action.users
            }
        case userConstants.GETALL_FAILURE:
            return {
                error: action.error
            }
        case userConstants.DELETE_REQUEST:
            return {
                ...state,
                items: state.items.map(user =>
                    isError.id === action.id
                        ? { ...user, delete: true }
                        : user    
                )
            }
        case userConstants.DELETE_SUCCESS:
            return {
                // ...state,
                items: state.items.filter(user => user.id !== action.id)
            }
        case userConstants.DELETE_FAILURE:
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.id === action.id) {
                        const { deleting, ...userCopy } = user;

                        return { ...userCopy, deleteError: action.error };
                    }

                    return user
                })
            }
        default:
            return state
    }
}