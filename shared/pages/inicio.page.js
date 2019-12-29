/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StatusBar} from 'react-native';

import {Temperatura, Endereco, LoadingComponent} from '../../shared/molecules';
import {Button} from '../../shared/atoms';
import {ClimaService} from '../../shared/common/services/clima.service';

export class Inicio extends React.Component {
  state = {
    endereco: null,
    temperatura: 0,
    clima: null,
    carregando: true,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.carregarDados();
  }

  carregarDados = async () => {
    this.setState({carregando: true});
    const latitude = -2.538474;
    const longitude = -44.281276;
    const dadosClima = await ClimaService.recuperarClimaPelaLocalizacao(
      latitude,
      longitude,
    );
    if (dadosClima) {
      this.setState({
        endereco: dadosClima.name,
        clima: dadosClima.weather[0].description,
        temperatura: dadosClima.main.temp,
        carregando: false,
      });
    }
  };

  render() {
    if (!this.state.carregando) {
      return (
        //centralizar componentes para melhor visualização
        <View style={{flex: 1, backgroundColor: '#FEFEFE'}}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />

          {/* endereco */}
          <View style={{flex: 0.5}}>
            <Endereco cidade={this.state.endereco} estado="Maranhão" />
          </View>
          {/* temperatura */}
          <View style={{flex: 0.75}}>
            <Temperatura
              temperatura={parseInt(this.state.temperatura)}
              clima={this.state.clima}
            />
          </View>

          {/* informacoes */}
          <View style={{flex: 2}}>
            <View
              style={{
                flex: 1,
              }}>
              {/* <Informacoes /> */}
            </View>
            <Button onPress={this.carregarDados} />
          </View>
        </View>
      );
    } else {
      return <LoadingComponent />;
    }
  }
}
