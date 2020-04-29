import { initialState, PhotoState } from '../state';
import { ActionTypes } from 'app/constants';
import { Models } from 'app/models';

export const PhotographyReducer = (state = initialState, action: any): PhotoState => {
	switch (action.type) {
		case ActionTypes.GET_PHOTOS_REQUEST:
			return {
				...state,
				isLoading: true
			};
		
		case ActionTypes.GET_PHOTOS_SUCCESS:
			return {
				...state,
				isLoading: false,
				photos: (state.photos as Models.Photos[]).concat(action.payload)
			};
		case ActionTypes.GET_PHOTOS_FAILED:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		default: return state;
	}
};