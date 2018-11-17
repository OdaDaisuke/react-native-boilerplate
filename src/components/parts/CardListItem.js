// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles/CardList.scss'

type CardListItemProps = {
    title: string
}

export default (props: CardListItemProps) => {

    return (
        <View style={styles.cardListItem}>
            <Text style={styles.cardListLabel}>{props.title}</Text>
        </View>
    )
}