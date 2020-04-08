import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginForm from './component/loginForm';

ReactDOM.render(
  <Provider store={store}>
    <LoginForm />
  </Provider>,
  document.getElementById('root')
);

