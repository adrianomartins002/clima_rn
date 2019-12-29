import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Sun from '../common/assets/illustrations/sun-glass.svg';

export const SemPermissao = props => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.containerTemp} />
      <Sun width={180} height={110} />
      <View style={styles.containerCarregando}>
        <Text style={styles.textCarregando}>
          É necessário dar permissão para localização pelo gps para utilizar os
          recursos do clima
        </Text>
        <View style={[stylesBotao.containerBotao]}>
          <TouchableOpacity onPress={props.onPress} style={styles.touchable}>
            <Text style={stylesBotao.textBotao}>Permitir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const stylesBotao = StyleSheet.create({
  containerBotao: {
    width: 150,
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#BB8700',
    marginTop: 15,
    borderRadius: 25,
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textBotao: {
    fontSize: 18,
    marginTop: 10,
    color: '#FFF',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textCarregando: {
    fontSize: 20,
    fontWeight: '800',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
