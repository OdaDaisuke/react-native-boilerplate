import React from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel'
const styles = require('../../styles/ArtistListSection.scss')

export default () => {
    const width = Dimensions.get("window").width
    const data = [{
        title: "アーティストA",
        img: require("../../../assets/images/3.jpg"),
    }, {
        title: "Bアーティスト",
        img: require("../../../assets/images/4.jpg"),
    }, {
        title: " シンガーC",
        img: require("../../../assets/images/5.jpg"),
    }]

    return (
        <View style={styles.container}>
            <Carousel
                data={data}
                renderItem={Item}
                sliderWidth={width}
                itemWidth={width * 0.75}
                autoplay
                loop
            />
        </View>
    )
}

const Item = ( {item, index }: any) => {
    return (
        <View style={styles.item}>
            <Image
                source={item.img}
                style={styles.img}
            />
            <View style={styles.labelWrap}>
                <Text style={styles.label}>{item.title}</Text>
            </View>
        </View>
    )
}