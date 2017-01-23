import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Container from './components/Container';

const store = configureStore();

render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
);
