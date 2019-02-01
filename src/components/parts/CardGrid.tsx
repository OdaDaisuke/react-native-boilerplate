import React from 'react'
import { FlatList } from 'react-native'
import CardGridItem from './CardGridItem'
const styles = require('../../styles/CardGrid.scss')

type CardGridProps = {
    cols: number
}

export default (props: CardGridProps) => {
    const data = [{
        title: "SF",
        img: require("../../../assets/images/3.jpg"),
    }, {
        title: "恋愛",
        img: require("../../../assets/images/2.jpg"),
    }, {
        title: "ホラー",
        img: require("../../../assets/images/4.jpg"),
    }, {
        title: "日常",
        img: require("../../../assets/images/5.jpg"),
    }, {
        title: "ギャグ・お笑い",
        img: require("../../../assets/images/1.jpg"),
    }, {
        title: "その他",
        img: require("../../../assets/images/2.jpg"),
    }]

    return (
        <FlatList
            numColumns={props.cols}
            style={styles.cardGrid}
            data={data}
            renderItem={ ( {item} ) => <CardGridItem {...item} /> }
        />
    )
}