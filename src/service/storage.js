import { AsyncStorage } from 'react-native'

export default class Storage {
    constructor() {
    }

    async isAppOpened() {
        return await AsyncStorage.getItem('opened')
    }
}