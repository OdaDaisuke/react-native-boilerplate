// @flow

import React from 'react'
import { View, TextInput, Text, Keyboard } from 'react-native'
import styles from '../../styles/Input'

type InputProps = {
  label: string,
  value: string,
  onChangeText: (text: string) => void,
  numberOfLines?: number,
  multiline?: boolean,
}

export default (props: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        multiline={props.multiline}
        editable={true}
        value={props.value}
        onChangeText={props.onChangeText}
        onSubmitEditing={Keyboard.dismiss}
      />
    </View>
  )
}