import React from 'react'
import { View, Text, Image } from 'react-native'
const styles = require('../../styles/CardGrid.scss')

type CardGridItemProps = {
    title: string,
    img: any
}

export default (props: CardGridItemProps) => {
    return (
        <View style={styles.cardGridItem}>
            <Image style={styles.img} source={props.img} />
            <View style={styles.labelWrap}>
                <Text style={styles.cardGridLabel}>{props.title}</Text>
            </View>
        </View>
    )
}