import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {}

const store = createStore(
    combineReducers({ rootReducer }),
    initialState,
)

const configureStore = () =>{
    const persistor = persistStore(store)
    return { persistor, store }
}

export default configureStore