import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Refresh from '../common/assets/illustrations/refresh-arrow.svg';

export const Button = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress} style={styles.touchable}>
        <Text style={styles.text}>Atualizar</Text>
        <Refresh width={18} height={18} fill="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 50,
    borderRadius: 25,
    alignSelf: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#FFF',
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
