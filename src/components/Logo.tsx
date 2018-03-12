import React from 'react'
import styled, { keyframes } from 'styled-components'

const logo = require('images/logo.svg')

const rotate360 = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`
const AppLogo = styled.img`
animation: ${rotate360} infinite 20s linear;
height: 80px;
`

export default () => <AppLogo src={logo} alt="logo" />