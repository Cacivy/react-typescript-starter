import React, { Component } from 'react'
import './Error.scss'
import { RouteComponentProps } from 'react-router-dom'
import { Link } from 'react-router-dom'

interface State {
  count: Number
}

class Error extends Component<RouteComponentProps<any>, State> {
  state = {
    count: 5
  }

  timer: number

  componentDidMount() {
    this.timer = window.setInterval(() => {
      if (this.state.count === 0) {
        clearInterval(this.timer)
        this.timer = 0
        return this.props.history.replace('/')
      }
      this.setState({ count: this.state.count - 1 })
    },                              1000)
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  render() {
    const home = <Link to="/">首页</Link>
    return (
      <div id="error">
        <p>404</p>
        {this.state.count ? (
          <small>
            {this.state.count}s 后跳转到{home}
          </small>
        ) : (
          <small>正在跳转到{home}...</small>
        )}
      </div>
    )
  }
}

export default Error
