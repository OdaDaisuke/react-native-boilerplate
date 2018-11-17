// @flow

import React from 'react'
import { View, Text } from 'react-native'
import Button from '../parts/Button'

type PropsType = {
}

export default (props: PropsType) =>{
    return (
        <View>
            <Button>Press me</Button>
            <Text>home screen</Text>
        </View>
    )
}