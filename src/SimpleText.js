import React from 'react'
import { Toto } from './Styled'

const SimpleText = ({ value }: { value: string }) => (
  <Toto id="hello">{`hello ${value}`}</Toto>
)

export default SimpleText
