//Core
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//1
import { Provider } from 'react-redux';
import store from './store/store.js';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
 
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
