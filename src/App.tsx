import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import history from './services/history';
import Routes from './routes';

import { Provider } from 'react-redux';
import store from './store';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
