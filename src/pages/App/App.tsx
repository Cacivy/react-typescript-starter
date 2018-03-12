import React from 'react'
import styled from 'styled-components'
import { Logo } from 'components'
import { inject } from 'mobx-react';
import { IUser } from 'store'

interface AppProps {
  userStore?: IUser
}

@inject('userStore')
class App extends React.Component<AppProps> {
  render() {
    const AppContainer = styled.div`
      text-align: center;
    `
    const AppHeader = styled.header`
      background-color: #222;
      height: 150px;
      padding: 20px;
      color: white;
    `

    const AppTitle = styled.h1`
      font-size: 1.5em;
    `
    const AppIntro = styled.p`
      font-size: large;
    `

    const { username } = this.props.userStore! 

    return (
      <AppContainer>
        <AppHeader>
          <Logo />
          <AppTitle>Welcome to React, {username}</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </AppIntro>
      </AppContainer>
    )
  }
}

export default App
