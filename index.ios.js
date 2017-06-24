
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import store from './src/store';
import TodoApp  from './src/app';

export default class reactDemoNative extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('reactDemoNative', () => reactDemoNative);
