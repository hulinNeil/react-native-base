import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store';
import Router from './router';

let store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store.store} style={{ flex: 1 }}>
        <PersistGate loading={null} persistor={store.persistor}>
          <Router />
        </PersistGate>
      </Provider>
    );
  }
};
