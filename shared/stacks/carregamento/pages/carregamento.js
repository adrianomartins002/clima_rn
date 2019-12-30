import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  PermissionsAndroid,
} from 'react-native';
import Sun from '../../../common/assets/illustrations/sun-glass.svg';
import Offline from '../../../common/assets/illustrations/offline.svg';
import NetInfo from '@react-native-community/netinfo';

export class Carregamento extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    redeConectada: true,
    semPermissaoLocalizacao: true,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    NetInfo.addEventListener(state => {
      this.verificarConexao(state.isConnected);
    });
  }

  verificarConexao = isConnected => {
    this.setState({redeConectada: isConnected});
    isConnected ? this.requisitarLocalizacao() : () => {};
  };

  requisitarLocalizacao = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permissão de localização',
        message:
          'Para conseguir o clima da sua região ' +
          'é necessário a permissão de localização',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      },
    );
    if (granted) {
      this.props.navigation.navigate('Inicio');
    } else {
      this.props.navigation.navigate('SemPermissao');
    }
  };

  render() {
    if (!this.state.redeConectada) {
      return (
        <View style={styles.container}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View style={styles.containerTemp} />
          <Offline width={180} height={110} />
          <View style={styles.containerCarregando}>
            <Text style={styles.textCarregando}>
              Aparentemente você está sem internet!
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View style={styles.containerTemp} />
          <Sun width={180} height={110} />
          <View style={styles.containerCarregando}>
            <Text style={styles.textCarregando}>Carregando</Text>
            <ActivityIndicator size="large" color="#0090C7" />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTemp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCarregando: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  textCarregando: {
    fontSize: 20,
    fontWeight: '800',
  },
});
