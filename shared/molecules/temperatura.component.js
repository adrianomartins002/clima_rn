import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// import Sun from '../common/assets/illustrations/cloud.svg';

export const Temperatura = props => {
  const Icone = props.icone;
  return (
    <View style={styles.container}>
      <View style={styles.containerTemp}>
        <Text style={styles.textTemperatura}>{props.temperatura}º</Text>
        <Icone width={120} height={80} />
      </View>
      <Text style={styles.textClima}>{props.clima}</Text>
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
    color: '#FFF',
  },
  textClima: {
    flex: 0.3,
    fontSize: 20,
    fontWeight: '800',
    color: '#FFF',
  },
});
