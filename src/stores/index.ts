import ApplicationStore from './ApplicationStore'
import AppNavigatorStore from './AppNavigatorStore'

const stores = {
  application: new ApplicationStore(),
  appNavigation: new AppNavigatorStore(),
}

const actions = {
}

export { stores, actions }