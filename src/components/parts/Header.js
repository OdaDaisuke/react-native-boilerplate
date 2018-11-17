import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from '../../styles/Header'

export default ( { title, goBack }: Object ) => {

  return (
    <View style={styles.header}>
        <GoBack onPress={goBack} />
        <Text style={styles.label}>{title}</Text>
    </View>
  )
}

const GoBack = ({ onPress }: Object) => {
    if(!onPress) {
        return null
    }
    return (
        <TouchableOpacity style={styles.backIconContainer} onPress={() => onPress()}>
            <Ionicons name='ios-arrow-back' style={styles.backIcon}/>
        </TouchableOpacity>
    )
}