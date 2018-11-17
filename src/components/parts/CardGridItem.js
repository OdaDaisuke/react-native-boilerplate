// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles/CardGrid.scss'

type CardGridItemProps = {
    title: string
}

export default (props: CardGridItemProps) => {

    return (
        <View style={styles.cardGridItem}>
            <Text style={styles.cardGridLabel}>{props.title}</Text>
        </View>
    )
}