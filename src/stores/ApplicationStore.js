// @flow
import { observable, action } from 'mobx'

type NavigationState = {
    index: number,
    routes: Array<{
        key: string,
        routeName: string,
        params: Object
    }>
}

export default class ApplicationStore {
    @observable sampleStatus: boolean = false
}