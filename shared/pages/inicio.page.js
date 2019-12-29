/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StatusBar, PermissionsAndroid, StyleSheet} from 'react-native';

import NetInfo from '@react-native-community/netinfo';
import Geolocation from '@react-native-community/geolocation';

import {Informacoes} from '../organisms';
import {
  Temperatura,
  Endereco,
  LoadingComponent,
  SemPermissao,
  NetworkInfo,
} from '../../shared/molecules';
import {Button} from '../../shared/atoms';
import {ClimaService} from '../../shared/common/services/clima.service';

export class Inicio extends React.Component {
  state = {
    endereco: null,
    temperatura: 0,
    clima: null,
    carregando: true,
    sensacao: null,
    vento: null,
    nuvens: null,
    pressao: null,
    pais: null,
    color: null,
    icone: null,
    semPermissaoLocalizacao: false,
    redeConectada: true,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const unsubscribe = NetInfo.addEventListener(state => {
      this.setState({redeConectada: state.isConnected});
    });
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
        buttonNeutral: 'Pergunte-me depois',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      if (this.state.redeConectada) {
        Geolocation.getCurrentPosition(info => {
          let latitude = -2.509612;
          let longitude = -44.303996;
          // latitude = info.coords.latitude;
          // longitude = info.coords.longitude;
          this.setState({carregando: true});

          ClimaService.recuperarClimaPelaLocalizacao(latitude, longitude).then(
            result => {
              if (result) {
                this.setState({
                  endereco: result.name,
                  clima: result.weather[0].description,
                  temperatura: parseInt(result.main.temp),
                  carregando: false,
                  sensacao: result.main.feels_like,
                  vento: result.wind.speed,
                  nuvens: result.clouds.all,
                  pressao: result.main.pressure,
                  pais: result.sys.country,
                  color: ClimaService.tratarTemaPorCodigo(
                    result.weather[0].icon,
                  )[0].cor,
                  // color: ClimaService.tratarTemaPorCodigo('02d')[0].cor,
                  icone: ClimaService.tratarTemaPorCodigo(
                    result.weather[0].icon,
                  )[0].icone,
                });
              }
            },
          );
        });
      }
    } else {
      this.setState({semPermissaoLocalizacao: true});
    }
  };

  hadlePressPermitirLocalizacao = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permissão de localização',
        message:
          'Para conseguir o clima da sua região ' +
          'é necessário a permissão de localização',
        buttonNeutral: 'Pergunte-me depois',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      },
    );
    if (granted) {
      this.setState({semPermissaoLocalizacao: false});
      this.carregarDados();
    }
  };

  render() {
    if (this.state.semPermissaoLocalizacao) {
      return <SemPermissao onPress={this.hadlePressPermitirLocalizacao} />;
    }

    if (!this.state.carregando) {
      return (
        //centralizar componentes para melhor visualização
        <View style={[styles.page, {backgroundColor: this.state.color}]}>
          <StatusBar
            backgroundColor={this.state.color}
            barStyle="light-content"
          />
          <NetworkInfo />
          {/* endereco */}
          <View style={styles.containerEndereco}>
            <Endereco
              localizacao={this.state.endereco}
              estado={this.state.pais}
            />
          </View>
          {/* temperatura */}
          <View style={styles.containerTemperatura}>
            <Temperatura
              temperatura={this.state.temperatura}
              clima={this.state.clima}
              icone={this.state.icone}
            />
          </View>

          {/* informacoes */}
          <View style={styles.containerInformacoes}>
            <Informacoes
              dados={{
                sensacao: this.state.sensacao,
                vento: this.state.vento,
                nuvens: this.state.nuvens,
                pressao: this.state.pressao,
              }}
            />
          </View>
          <View style={styles.containerAtualizar}>
            <Button
              onPress={this.carregarDados}
              backgroundColor={this.state.color}
            />
          </View>
        </View>
      );
    } else {
      return <LoadingComponent />;
    }
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#E0AF3E'},
  containerEndereco: {flex: 0.75},
  containerTemperatura: {flex: 1},
  containerInformacoes: {flex: 1.75},
  containerAtualizar: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
