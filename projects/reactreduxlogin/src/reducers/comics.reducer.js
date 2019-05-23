import { comicConstants } from '../constants'

export const comics = (state = {}, action) => {
    switch(action.type) {
        case comicConstants.GETALL_REQUEST:
            return {
                loading: true
            }
        case comicConstants.GETALL_SUCCESS:
            return {
                items: action.items
            }
        case comicConstants.GETALL_FAILURE:
            return
        case comicConstants.GETONE_REQUEST: 
            return {
                error: action.error
            }
        case comicConstants.GETONE_SUCCESS:
            return
        case comicConstants.GETONE_FAILURE:
            return
        default:
            return state
    }
}