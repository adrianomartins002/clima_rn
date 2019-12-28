import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Sun from '../common/assets/illustrations/sunny.svg';

export const Temperatura = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTemp}>
        <Text style={styles.textTemperatura}>{props.temperatura}º</Text>
        <Sun width={120} height={80} />
      </View>
      <Text style={styles.textClima}>Parcialmente nublado</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTemp: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTemperatura: {
    fontSize: 100,
    fontWeight: '800',
  },
  textClima: {
    fontSize: 20,
    fontWeight: '800',
  },
});
