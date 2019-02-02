import APIClient from '../infra/api'
import AuthStorage from '../infra/auth'
import AccountService from '../service/account'

export default class ApplicationStore {
  /*--- Infra ---*/
  apiClient = new APIClient('')
  authStorage = new AuthStorage()

  /*--- Services ---*/
  accountService = new AccountService()
}
