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
import {Informacoes} from './shared/organisms';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //centralizar componentes para melhor visualização
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="white" />

        {/* endereco */}
        <View style={{flex: 0.5}}>
          <Endereco cidade="São Luís" estado="Maranhão" />
        </View>
        {/* temperatura */}
        <View style={{flex: 0.75}}>
          <Temperatura temperatura="41" />
        </View>

        {/* informacoes */}
        <View style={{flex: 2}}>
          <View
            style={{
              flex: 1,
            }}>
            {/* <Informacoes /> */}
          </View>
        </View>
      </View>
    );
  }
}

export default App;
