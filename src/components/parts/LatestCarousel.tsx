import * as React from 'react'
import { View, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import LatestCarouselItem from './LatestCarouselItem'
const styles = require('../../styles/LatestCarousel')

export default () => {
    const width = Dimensions.get("window").width
    const data = [{
        title: "新着特集",
        img: require("../../../assets/images/3.jpg"),
    }, {
        title: "注目5選",
        img: require("../../../assets/images/5.jpg"),
    }]

    return (
        <View style={styles.container}>
            <Carousel
                data={data}
                renderItem={LatestCarouselItem}
                sliderWidth={width}
                itemWidth={width}
                autoplay
                loop
            />
        </View>
    )
}