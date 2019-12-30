import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import * as Animatable from 'react-native-animatable';

const {width} = Dimensions.get('window');

function OfflineMessage() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>Sem internet</Text>
    </View>
  );
}

/**
 * Componente criado para informar se a conexão de rede caiu
 * ou wi-fi ou móvel
 */
export class NetworkInfo extends React.PureComponent {
  state = {
    isConnected: true,
    visible: true,
  };

  constructor(props) {
    super(props);
    this.viewConexao = null;
  }

  componentDidMount() {
    NetInfo.addEventListener(state => {
      this.handleConnectivityChange(state.isConnected);
    });
  }

  show = () => {
    this.viewConexao.fadeInDown(1000);
    if (!this.state.visible && !this.state.isConnected) {
      this.setState({visible: true});
    }
  };

  async hide() {
    setTimeout(() => {
      if (this.viewConexao) {
        this.viewConexao.fadeOut(1000);
      }
    }, 2500);
  }

  handleConnectivityChange = isConnected => {
    this.setState({isConnected}, () => {
      this.setVisible(!isConnected);
    });
  };

  setVisible = visible => {
    if (visible && !this.state.isConnected) {
      this.show();
    } else if (this.state.isConnected === true) {
      this.hide();
    }
  };

  render() {
    return (
      <View style={{display: this.state.visible ? 'flex' : 'none'}}>
        <Animatable.View
          ref={ref => {
            this.viewConexao = ref;
          }}
          style={{
            height: this.state.visible ? 30 : 0,
            width: '100%',
            position: 'absolute',
            elevation: 1,
            zIndex: 99,
          }}>
          {this.state.isConnected ? null : <OfflineMessage />}
        </Animatable.View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 30,
    zIndex: 999,
  },
  offlineText: {
    color: '#fff',
  },
});
