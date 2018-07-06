import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDWdD69NNwFA9as8AyPijqs9WxBLrAsbRw',
      authDomain: 'manager-9d5fa.firebaseapp.com',
      databaseURL: 'https://manager-9d5fa.firebaseio.com',
      projectId: 'manager-9d5fa',
      storageBucket: 'manager-9d5fa.appspot.com',
      messagingSenderId: '861944161014'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
