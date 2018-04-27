import React from 'react'
import styled from 'styled-components'
import { Logo } from 'components'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'
import { IUser } from 'store'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

interface AppProps {
  userStore?: IUser
}

@inject('userStore')
@observer
class App extends React.Component<AppProps> {
  @observable count: number = 0

  onClick = () => {
    ++this.count
  }

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
      font-size: 15px;
      color: #fff;
    `
    const AppIntro = styled.p`
      font-size: 16px;
    `

    const { username } = this.props.userStore!

    return (
      <AppContainer>
        <AppHeader>
          <Logo />
          <AppTitle>Welcome to React, {username}</AppTitle>
        </AppHeader>
        <AppIntro>
          <p>
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Link to="/dashboard">
            <Button>dashboard</Button>
          </Link>
          <Button size="large" type="primary" onClick={this.onClick}>
            click me
          </Button>
          <span>click count {this.count}</span>
        </AppIntro>
      </AppContainer>
    )
  }
}

export default App
