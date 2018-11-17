// @flow

import React from 'react'
import { FlatList } from 'react-native'
import CardListItem from './CardListItem'
import styles from '../../styles/CardList.scss'

type CardListProps = {
    cols: number
}

export default (props: CardListProps) => {
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
            style={styles.cardList}
            data={data}
            renderItem={ ( {item} ) => <CardListItem {...item} /> }
        />
    )
}