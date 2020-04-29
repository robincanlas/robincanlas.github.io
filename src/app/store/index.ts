import { 
	createStore, 
	combineReducers, 
	applyMiddleware, 
	Store } from 'redux';
import thunk from 'redux-thunk';
import { PhotographyReducer } from './photography/reducers';
import { PhotoState } from './photography/state';

export interface RootState {
	photography: PhotoState;
}

export const configureStore = (initialState?: RootState): Store<RootState> => {
	const middleware = applyMiddleware(thunk); // <-- later check if production
	const rootReducer = combineReducers<RootState>({
		photography: PhotographyReducer as any
	});

	const store = createStore(rootReducer, initialState as RootState, middleware);

	return store;
};

export * from './photography/reducers';

// store.subscribe(() => console.log(store.getState().photography));
// // Dispatch some actions
// store.dispatch(getPhotos());