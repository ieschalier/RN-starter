import React from 'react'
import App from './App'

// eslint-disable-next-line
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON()
  expect(rendered).toBeTruthy()
});
