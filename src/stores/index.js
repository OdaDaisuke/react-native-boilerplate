// @flow
import ApplicationStore from './ApplicationStore'
import AppNavigatorStore from './AppNavigatorStore'

const stores = {
  application: new ApplicationStore(),
  appNavigator: new AppNavigatorStore(),
}

const actions = {
}

export { stores, actions }