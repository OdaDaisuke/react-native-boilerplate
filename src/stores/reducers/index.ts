import { combineReducers } from 'redux'
import { AsyncStorage } from 'react-native'
import { persistReducer } from 'redux-persist'
import user from './user'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    user,
})

export default persistReducer(persistConfig, rootReducer)