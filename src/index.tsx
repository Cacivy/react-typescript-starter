import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App /> as any,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
