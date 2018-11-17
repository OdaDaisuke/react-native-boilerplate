// @flow
import { observable } from 'mobx'

export default class ApplicationStore {
    @observable sampleStatus: boolean = false
}