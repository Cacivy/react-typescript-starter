import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from 'styled-components'
import { Provider } from 'mobx-react'
import { userStore } from 'store'
import viewport from './utils/viewport'
import Router from './router'
import './index.css'

viewport()

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`

ReactDOM.render(
<Provider userStore={userStore}>
  <Router />
</Provider>, 
document.getElementById('root') as HTMLElement)
registerServiceWorker()

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept()
  }
}
