import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
// import { persistStore } from 'redux-persist'

import ApplicationStore from './ApplicationStore'
import AppNavigatorStore from './AppNavigatorStore'

const stores = {
  application: new ApplicationStore(),
  appNavigation: new AppNavigatorStore()
}

const actions = {}

export { stores, actions }
