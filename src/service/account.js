// @flow

export default class AccountService {
    apiClient: Object
    authStorage: Object

    user: Object

    constructor() {
        this.initialize()
    }

    initialize() {
    }

    /*--- Actions ---*/
    async signin() {
    }

    async signup() {
        alert("signup clicked")
    }
}