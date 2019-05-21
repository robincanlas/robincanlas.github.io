import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production'){
    middleware.push(createLogger())
}

export const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)
