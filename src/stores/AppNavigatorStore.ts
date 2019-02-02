import AppNavigator from '../navigator/AppNavigator'

type AppNavigationState = {
  index: number
  routes: {
    key: string
    routeName: string
    params: Object
  }[]
}

export default class AppNavigatorStore {
  navigation: Object = {}

  navigationState: AppNavigationState = {
    index: 0,
    routes: [
      {
        key: 'Home',
        routeName: 'Home',
        params: {}
      },
      // {
      //     key: "Signup",
      //     routeName: "Signup",
      //     params: {},
      // },
      {
        key: 'Profile',
        routeName: 'Profile',
        params: {}
      }
    ]
  }

  dispatch = (action: any, stackNavState: boolean = true): boolean => {
    const previousNavState = stackNavState ? this.navigationState : null
    this.navigationState = AppNavigator.router.getStateForAction(
      action,
      previousNavState
    )
    return true
  }

  setNavigation = (navigation: any): void => {
    this.navigation = navigation
  }
}
