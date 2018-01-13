import React from 'react'
import styled from 'styled-components/native'

const Toto = styled.Text`
  color: red;
`

const SimpleTex = ({ value }: { value: string }) => (
  <Toto id="hello">{`hello ${value}`}</Toto>
)

const Index = () => <SimpleTex value="toto" />

export default Index
