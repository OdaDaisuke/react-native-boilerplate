// @flow
import { observable, action } from 'mobx'
import AppNavigator from '../navigator/AppNavigator'

type AppNavigationState = {
    index: number,
    routes: {
        key: string,
        routeName: string,
        params: Object
    }[]
}

export default class AppNavigatorStore {
    @observable.ref navigation: Object = {}

    @observable.ref navigationState: AppNavigationState = {
        index: 0,
        routes: [
            {
                key: "Signup",
                routeName: "Signup",
                params: {},
            },
            {
                key: 'Home',
                routeName: 'Home',
                params: {},
            },
            {
                key: "Profile",
                routeName: "Profile",
                params: {},
            },
        ]
    }

    @action dispatch = (action: any, stackNavState: boolean = true): boolean => {
        const previousNavState = stackNavState ? this.navigationState : null
        this.navigationState = AppNavigator.router.getStateForAction(
          action,
          previousNavState
        )
        return true
    }

    @action setNavigation = (navigation: any): void => {
        this.navigation = navigation
    }

}