import * as React from 'react'
import { View, Text } from 'react-native'
import { Storage } from '../../domain'

interface IHomeProps {
    vm: HomeVM
}

export class Home extends React.Component<IHomeProps, any> {
    render() {
        return (
            <View>
                <Text>home screen</Text>
            </View>
        )
    }
}

export class HomeVM {
    storageClient: Storage

    constructor(storage: Storage) {
        this.storageClient = storage
    }
}