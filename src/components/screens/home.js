import React from 'react'
import { View, Text } from 'react-native'
import Button from '../parts/button'

export class Home extends React.Component {
    render() {
        return (
            <View>
                <Button>Press me</Button>
                <Text>home screen</Text>
            </View>
        )
    }
}

export class HomeVM {
    storageClient

    constructor(storage) {
        this.storageClient = storage
    }
}