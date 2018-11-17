// @flow

import React from 'react'
import { View, Text } from 'react-native'
import Button from '../parts/Button'

type PropsType = {
    navigation: any
}

export default (props: PropsType) =>{
    return (
        <View>
            <Button onPress={() => props.navigation.navigate('Profile')}>Press me</Button>
            <Text>home screen</Text>
        </View>
    )
}