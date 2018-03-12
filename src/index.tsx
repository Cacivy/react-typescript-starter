import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './pages'
import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from 'styled-components'
import { Provider } from 'mobx-react'
import { userStore } from 'store'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`

ReactDOM.render(
<Provider userStore={userStore}>
  <App />
</Provider>, 
document.getElementById('root') as HTMLElement)
registerServiceWorker()
