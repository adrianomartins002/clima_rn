import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Offline from '../../../common/assets/illustrations/offline.svg';
import NetInfo from '@react-native-community/netinfo';
import {SystemUtils} from '../../../common/utils/system';
import AnimatedLoader from 'react-native-animated-loader';

export class Carregamento extends React.PureComponent {
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
    if (granted !== 'denied' && this._redeConectada) {
      this.props.navigation.navigate('Inicio');
    } else {
      this.props.navigation.navigate('SemPermissao', {
        onPress: this.requisitarLocalizacao,
      });
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
          <View style={styles.containerCarregando} />
          <AnimatedLoader
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={require('../../../common/assets/animations/loader-sun2.json')}
            animationStyle={{
              width: '100%',
              height: '100%',
              marginLeft: 10,
              opacity: 1,
              backgroundColor: '#5267FF',
            }}
            speed={1}
          />
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
