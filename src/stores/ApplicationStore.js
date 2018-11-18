// @flow
import { observable, action } from 'mobx'
import APIClient from '../infra/api'
import AuthStorage from '../infra/auth'
import AccountService from '../service/account'

export default class ApplicationStore {
    /*--- Infra ---*/
    @observable apiClient = new APIClient()
    @observable authStorage = new AuthStorage()

    /*--- Services ---*/
    @observable accountService = new AccountService()
}