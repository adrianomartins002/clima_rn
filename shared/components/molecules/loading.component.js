import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import PropTypes from 'prop-types';

export const LoadingComponent = props => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={
          props.backgroundColor ? props.backgroundColor : '#E0AF3E'
        }
        barStyle="dark-content"
      />
      <View style={styles.containerTemp} />
      <View style={styles.containerCarregando} />
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require('../../common/assets/animations/loader-sun2.json')}
        animationStyle={[
          styles.containerAnimation,
          {
            backgroundColor: props.backgroundColor
              ? props.backgroundColor
              : '#E0AF3E',
          },
        ]}
        speed={1}
      />
    </View>
  );
};

LoadingComponent.propTypes = {
  backgroundColor: PropTypes.string,
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
