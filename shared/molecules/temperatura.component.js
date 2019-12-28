import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Temperatura = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.temperatura}º</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 100,
    fontWeight: '800',
  },
});
