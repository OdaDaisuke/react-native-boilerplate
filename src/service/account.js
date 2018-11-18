// @flow

export default class AccountService {
    apiClient: Object
    authStorage: Object

    user: Object

    constructor(apiClient, authStorage) {
        this.apiClient = apiClient
        this.authStorage = authStorage
        this.initialize()
    }

    initialize() {
        const user = this.authStorage.loadUser()
        this.user = user
    }

    /*--- Actions ---*/
    async signin() {
    }

    async signup() {
    }
}