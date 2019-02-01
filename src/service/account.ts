import { Alert } from 'react-native'

export default class AccountService {
    apiClient = null
    authStorage = null
    user = null

    constructor() {
        this.initialize()
    }

    initialize() {
    }

    /*--- Actions ---*/
    async signin() {
    }

    async signup() {
        Alert.alert("signup clicked")
    }
}