import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import Sun from '../../common/assets/illustrations/sun-glass.svg';

export const LoadingComponent = props => {
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
};

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
