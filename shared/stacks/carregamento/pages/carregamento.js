import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import Sun from '../../../common/assets/illustrations/sun-glass.svg';
import Offline from '../../../common/assets/illustrations/offline.svg';
import NetInfo from '@react-native-community/netinfo';
import {SystemUtils} from '../../../common/utils/system';

export class Carregamento extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _redeConectada = false;

  state = {
    semPermissaoLocalizacao: true,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._isMounted = true;
    NetInfo.addEventListener(state => {
      this.verificarConexao(state.isConnected);
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  verificarConexao = isConnected => {
    this._redeConectada = isConnected;
    if (this._isMounted && isConnected) {
      this.requisitarLocalizacao();
    }
  };

  requisitarLocalizacao = async () => {
    const granted = await SystemUtils.requisitarPermissaoDeLocalizacao();
    if (granted && this._redeConectada) {
      this.props.navigation.navigate('Inicio');
    } else {
      this.props.navigation.navigate('SemPermissao');
    }
  };

  render() {
    if (!this._redeConectada) {
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
