import { Models } from 'app/models';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { AnyAction } from 'redux';
import { ActionTypes } from 'app/constants';

type Thunk = ThunkAction<void, {}, {}, AnyAction>;
const photoEndpoint: string = 'https://robincanlas-server.herokuapp.com/photos';

export const getPhotos = (): Thunk => {
	const getPhotoRequest = () => {
		return { type: ActionTypes.GET_PHOTOS_REQUEST };
	};
	
	const getPhotoSuccess = (photos: Models.Photos) => {
		return { 
			type: ActionTypes.GET_PHOTOS_SUCCESS, 
			payload: photos 
		};
	};
	
	const getPhotoFail = (error: string) => {
		return { 
			type: ActionTypes.GET_PHOTOS_FAILED, 
			payload: error 
		};
	};

	return (dispatch: ThunkDispatch<{}, {}, AnyAction>): void => {
		dispatch(getPhotoRequest());
		axios.get(photoEndpoint)
			.then(response => {
				dispatch(getPhotoSuccess(response.data));
			})
			.catch(error => {
				dispatch(getPhotoFail(error.data));
			});
	};
};