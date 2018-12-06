// @flow

import React from 'react'
import { View , Text, Image } from 'react-native'
import styles from '../../styles/LatestCarousel'

type LatestCarouselItemProps = {
    item: any,
    img: any,
    index: any
}

export default (props: LatestCarouselItemProps) => {
    return (
        <View style={styles.item}>
            <Image style={styles.img} source={props.item.img} />
            <View style={styles.labelWrap}>
                <Text style={styles.label}>{props.item.title}</Text>
            </View>
        </View>            
    )
}