import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Endereco = props => {
  return (
    <View style={styles.container}>
      {/* cidade */}
      <Text style={styles.textCidade}>{props.cidade}</Text>
      {/* estado */}
      <Text style={styles.textEstado}>{props.estado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCidade: {fontSize: 30, fontWeight: 'bold'},
  textEstado: {fontSize: 22},
});
