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

import {Informacoes} from '../../../components/organisms';
import {
  Temperatura,
  Endereco,
  LoadingComponent,
  SemPermissao,
  NetworkInfo,
} from '../../../components/molecules';
import {Button} from '../../../components/atoms';
import {ClimaService} from '../../../common/services/clima.service';

export class Inicio extends React.Component {
  static navigationOptions = {
    header: null,
  };

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

  componentDidMount() {
    NetInfo.addEventListener(state => {
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
          let latitude = 0;
          let longitude = 0;
          latitude = info.coords.latitude;
          longitude = info.coords.longitude;
          this.setState({carregando: true});

          ClimaService.recuperarClimaPelaLocalizacao(latitude, longitude).then(
            result => {
              if (result) {
                // console.warn(result);
                this.setState(result);
                this.setState({carregando: false});
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
          {/* componente de verificação de conexão de rede */}
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
