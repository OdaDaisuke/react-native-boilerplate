import React from 'react'
import { View, Text } from 'react-native'
import { compose } from 'recompose'
const styles =  require('../../styles/Container')

type PropsType = {
}

const enhance = compose(
)

export default enhance( (props: PropsType) =>{
    return (
        <View style={styles.container}>
            <Text>profile screen</Text>
        </View>
    )
})