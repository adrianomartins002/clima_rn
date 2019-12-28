/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StatusBar} from 'react-native';

import {Temperatura, Endereco} from './shared/molecules';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //centralizar componentes para melhor visualização
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="white" />
        <View style={{flex: 0.5}}>
          <Endereco cidade="São Luís" estado="Maranhão" />
        </View>
        <View style={{flex: 0.75}}>
          <Temperatura temperatura="41" />
        </View>
        <View style={{flex: 2}} />
      </View>
    );
  }
}

export default App;
