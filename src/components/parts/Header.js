import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import styles from '../../styles/Header'

export default ( { title, goBack }: Object ) => {

  return (
    <LinearGradient 
        colors={['#4c669f', '#3b5998', '#192f6a']} 
        start={{x: 0.0, y: 1}} 
        end={{x: 1, y: 1}}
        style={styles.header}
    >
        <GoBack onPress={goBack} />
        <Text style={styles.label}>{title}</Text>
    </LinearGradient>
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