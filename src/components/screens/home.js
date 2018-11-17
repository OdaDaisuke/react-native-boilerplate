import React from 'react'
import { View, Text } from 'react-native'
import Button from '../parts/Button'

export default class Home extends React.Component {
    render() {
        return (
            <View>
                <Button>Press me</Button>
                <Text>home screen</Text>
            </View>
        )
    }
}