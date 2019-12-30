import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Refresh from '../../common/assets/illustrations/refresh-arrow.svg';

export const Button = props => {
  return (
    <View style={[styles.container, {backgroundColor: props.backgroundColor}]}>
      <TouchableOpacity onPress={props.onPress} style={styles.touchable}>
        <Refresh width={30} height={30} fill="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '95%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#BB8700',
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {marginRight: 10, fontSize: 18, color: '#FFF'},
});
