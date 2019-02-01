import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../components/parts/Button'

it('renders without crashing', () => {
  const rendered = renderer.create(<Button onPress={null} />).toJSON()
  expect(rendered).toBeTruthy()
})