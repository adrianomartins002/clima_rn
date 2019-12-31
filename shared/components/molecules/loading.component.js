import React from 'react';
import {View, StyleSheet} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

export const LoadingComponent = props => {
  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor="white" barStyle="dark-content" /> */}
      <View style={styles.containerTemp} />
      <View style={styles.containerCarregando} />
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require('../../common/assets/animations/loader-sun2.json')}
        animationStyle={[
          styles.containerAnimation,
          {
            backgroundColor: props.backgroundColor,
          },
        ]}
        speed={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAnimation: {
    width: '100%',
    height: '100%',
    marginLeft: 10,
    opacity: 1,
    backgroundColor: '#FFF',
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
