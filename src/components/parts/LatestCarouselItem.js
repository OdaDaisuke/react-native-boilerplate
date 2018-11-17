// @flow

import React from 'react'
import { View , Text } from 'react-native'
import styles from '../../styles/LatestCarousel'

type LatestCarouselItemProps = {
    item: any,
    index: any
}

export default (props: LatestCarouselItemProps) => {
    return (
        <View style={styles.item}>
            <Text style={styles.label}>{props.item.title}</Text>
        </View>            
    )
}