import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './app/app.jsx';

let store = createStore(function() {});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
