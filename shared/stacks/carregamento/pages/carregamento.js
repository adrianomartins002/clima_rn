import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import CloudConnection from '../../../common/assets/illustrations/cloud-connection.svg';
import NetInfo from '@react-native-community/netinfo';
import {SystemUtils} from '../../../common/utils/system';
import AnimatedLoader from 'react-native-animated-loader';

export class Carregamento extends React.PureComponent {
  static navigationOptions = {
    header: null,
  };

  _redeConectada = true;

  state = {
    semPermissaoLocalizacao: true,
    backgroundColor: '#E0AF3E',
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._isMounted = true;
    NetInfo.addEventListener(state => {
      this.verificarConexao(state.isConnected);
    });
    this.props.navigation.addListener('willFocus', () => this.didAppear());
  }

  didAppear = async () => {
    if (this._redeConectada) {
      this.setState({backgroundColor: '#E0AF3E'});
      this.requisitarLocalizacao();
    } else {
      this.setState({backgroundColor: '#C61141'});
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  verificarConexao = isConnected => {
    this._redeConectada = isConnected;
    if (isConnected === true && this.state.semPermissaoLocalizacao) {
      this.requisitarLocalizacao();
    }
  };

  requisitarLocalizacao = async () => {
    const granted = await SystemUtils.requisitarPermissaoDeLocalizacao();
    if (granted === 'denied') {
      this.props.navigation.navigate('PermissaoLocalizacao');
    } else {
      this.props.navigation.navigate('Inicio');
    }
  };

  render() {
    if (!this._redeConectada) {
      return (
        <View style={styles.container}>
          <StatusBar
            backgroundColor={this.state.backgroundColor}
            barStyle="dark-content"
          />
          <View style={styles.containerTemp} />
          <CloudConnection width={180} height={110} fill="#FFF" />
          <View style={styles.containerCarregando}>
            <Text style={styles.textCarregando}>
              Aparentemente você está sem internet!
            </Text>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={this.state.backgroundColor}
          barStyle="dark-content"
        />
        <View style={styles.containerTemp} />
        <View style={styles.containerCarregando} />
        <AnimatedLoader
          visible={true}
          overlayColor="rgba(255,255,255,0.75)"
          source={require('../../../common/assets/animations/loader-sun2.json')}
          animationStyle={styles.animatedLoader}
          speed={1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C61141',
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
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '800',
    color: '#FFF',
  },
  animatedLoader: {
    width: '100%',
    height: '100%',
    marginLeft: 10,
    opacity: 1,
    backgroundColor: '#E0AF3E',
  },
});
