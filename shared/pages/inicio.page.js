/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StatusBar, PermissionsAndroid} from 'react-native';

import Geolocation from '@react-native-community/geolocation';

import {Informacoes} from '../organisms';
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
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permissão de localização',
        message:
          'Para conseguir o clima da sua região ' +
          'é necessário a permissão de localização',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(info => {
        let latitude = 0;
        let longitude = 0;
        latitude = info.coords.latitude;
        longitude = info.coords.longitude;
        this.setState({carregando: true});

        ClimaService.recuperarClimaPelaLocalizacao(latitude, longitude).then(
          result => {
            if (result) {
              this.setState({
                endereco: result.name,
                clima: result.weather[0].description,
                temperatura: result.main.temp,
                carregando: false,
                sensacao: result.main.feels_like,
                vento: result.wind.speed,
                nuvens: result.clouds.all,
                pressao: result.main.pressure,
                pais: result.sys.country,
              });
            }
          },
        );
      });
    } else {
      console.log('Camera permission denied');
    }
  };

  render() {
    if (!this.state.carregando) {
      return (
        //centralizar componentes para melhor visualização
        <View style={{flex: 1, backgroundColor: '#BB8700'}}>
          <StatusBar backgroundColor="#BB8700" barStyle="dark-content" />

          {/* endereco */}
          <View style={{flex: 0.5}}>
            <Endereco cidade={this.state.endereco} estado={this.state.pais} />
          </View>
          {/* temperatura */}
          <View style={{flex: 1}}>
            <Temperatura
              temperatura={parseInt(this.state.temperatura)}
              clima={this.state.clima}
            />
          </View>

          {/* informacoes */}
          <View style={{flex: 1.5}}>
            <Informacoes
              dados={{
                sensacao: this.state.sensacao,
                vento: this.state.vento,
                nuvens: this.state.nuvens,
                pressao: this.state.pressao,
              }}
            />
          </View>
          <View
            style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
            <Button onPress={this.carregarDados} />
          </View>
        </View>
      );
    } else {
      return <LoadingComponent />;
    }
  }
}
