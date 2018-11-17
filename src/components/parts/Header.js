import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../../styles/Header'

export default ( { title, goBack } ) => {

  return (
    <View style={styles.header}>
        {(() => {
            return goBack ?
            (
                <TouchableOpacity onPress={() => goBack()}>
                </TouchableOpacity>
            ) : null
        })()}
        <Text style={styles.label}>{title}</Text>
    </View>
  )
}
