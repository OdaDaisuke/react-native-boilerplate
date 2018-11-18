// @flow

import React from 'react'
import { Text } from 'react-native'
import styles from '../../styles/SectionHead.scss'

type SectionHeadProps = {
  children: any
}

export default (props: SectionHeadProps) => {
  return (
    <Text style={styles.label}>{props.children}</Text>
  )
}
