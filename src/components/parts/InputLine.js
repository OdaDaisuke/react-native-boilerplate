import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export class InputLine extends React.Component {
  render() {
    return (
        <TextInput style={this.styles.input} multiline={false}></TextInput>
    )
  }

  get styles() {
    return StyleSheet.create({
      input: {
      },
    })
  }
}
