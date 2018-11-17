// @flow

import React from 'react'
import { FlatList } from 'react-native'
import CardGridItem from './CardGridItem'
import styles from '../../styles/CardGrid.scss'

type CardGridProps = {
    cols: number
}

export default (props: CardGridProps) => {
    const data = [{
        title: "SF",
    }, {
        title: "恋愛",
    }, {
        title: "ホラー",
    }, {
        title: "日常",
    }, {
        title: "ギャグ・お笑い",
    }, {
        title: "その他",
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