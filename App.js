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
import {Button} from './shared/atoms';
import axios from 'axios';
import {ClimaService} from './shared/common/services/clima.service';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // axios
    //   .get(
    //     'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22',
    //   )
    //   .then(response => console.log(response.data));
    ClimaService.recuperarClimaPelaLocalizacao();
  }

  render() {
    return (
      //centralizar componentes para melhor visualização
      <View style={{flex: 1, backgroundColor: '#FEFEFE'}}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        {/* endereco */}
        <View style={{flex: 0.5}}>
          <Endereco cidade="São Luís" estado="Maranhão" />
        </View>
        {/* temperatura */}
        <View style={{flex: 0.75}}>
          <Temperatura temperatura="28" />
        </View>

        {/* informacoes */}
        <View style={{flex: 2}}>
          <View
            style={{
              flex: 1,
            }}>
            {/* <Informacoes /> */}
          </View>
          <Button />
        </View>
      </View>
    );
  }
}

export default App;
