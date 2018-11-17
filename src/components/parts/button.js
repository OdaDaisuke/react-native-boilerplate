// @flow

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from '../../styles/Button.scss'

type ButtonProps = {
  onPress: () => void
}

export default (props: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonLabel}>{props.children}</Text>
    </TouchableOpacity>
  )
}
