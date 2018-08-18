import * as React from 'react'
import { StyleSheet, TextInput } from 'react-native'

interface IInputLineProps {
}

export class InputLine extends React.Component<IInputLineProps, any> {
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
