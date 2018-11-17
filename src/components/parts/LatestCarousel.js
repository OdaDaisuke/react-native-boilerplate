// @flow

import React from 'react'
import { View, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import LatestCarouselItem from './LatestCarouselItem'
import styles from '../../styles/LatestCarousel'

export default () => {
    const width = Dimensions.get("window").width
    const data = [{
        title: "新着特集"
    }, {
        title: "注目5選",
    }]

    return (
        <View style={styles.container}>
            <Carousel
                data={data}
                renderItem={LatestCarouselItem}
                sliderWidth={width}
                itemWidth={width}
            />
        </View>
    )
}