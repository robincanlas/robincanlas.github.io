import { comicConstants } from '../constants'
import { comicService } from '../services'

const getAll = () =>{
    return dispatch => {
        dispatch(request())

        comicService.getAll()
            .then(
                items => dispatch(success(items)),
                error => dispatch(failure(error.toString()))
            )
    }

    function request() { return { type: comicConstants.GETALL_REQUEST } }
    function success(items) { return { type: comicConstants.GETALL_SUCCESS, items } }
    function failure(error) { return { type: comicConstants.GETALL_FAILURE, error } }
}

export const comicActions = {
    getAll
}