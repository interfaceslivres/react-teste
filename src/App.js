
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class App extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

export default App;

// skip this line if using Create React Native App
// AppRegistry.registerComponent('App', () => LotsOfGreetings);
