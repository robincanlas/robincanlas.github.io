import { Models } from 'app/models';

export const initialState = {
	photos: [],
	isLoading: true,
	error: ''
};

export type PhotoState = {
	photos: Models.Photos[];
	isLoading: boolean;
	error: string;
};