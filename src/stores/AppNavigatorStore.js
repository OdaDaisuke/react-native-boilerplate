// @flow
import { observable, action } from 'mobx'

type AppNavigationState = {
    index: number,
    routes: Array<{
        key: string,
        routeName: string,
        params: Object
    }>
}

export default class AppNavigatorStore {
    @observable.ref navigationState: AppNavigationState = {
        index: 0,
        routes: [
          {
            key: 'Home',
            routeName: 'Home',
            params: {}
          }
        ]
    }

    @action dispatch = (action: any, stackNavState: boolean = true): boolean => {
        return true
    }
}