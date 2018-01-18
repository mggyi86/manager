import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAHT9q4DsOVWKSFzegpP0CO1awJk6dUwJg',
      authDomain: 'manager-51ee0.firebaseapp.com',
      databaseURL: 'https://manager-51ee0.firebaseio.com',
      projectId: 'manager-51ee0',
      storageBucket: 'manager-51ee0.appspot.com',
      messagingSenderId: '128518309873'
    };
    // if (!firebase.apps.length) {
      firebase.initializeApp(config);
    // }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
