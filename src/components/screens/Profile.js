// @flow

import React from 'react'
import { View, Text } from 'react-native'
import { compose } from 'recompose'
import { observer } from 'mobx-react/native'
import styles from '../../styles/Container'

type PropsType = {
}

const enhancer = compose(
    observer,
)

export default enhancer( (props: PropsType) =>{
    return (
        <View style={styles.container}>
            <Text>profile screen</Text>
        </View>
    )
})