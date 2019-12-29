import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Refresh from '../common/assets/illustrations/refresh-arrow.svg';

export const Button = props => {
  return (
    <View
      style={{
        width: 150,
        height: 50,
        borderRadius: 25,
        alignSelf: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#000',
      }}>
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{marginRight: 10, fontSize: 18, color: '#FFF'}}>
          Atualizar
        </Text>
        <Refresh width={18} height={18} fill="#FFF" />
      </TouchableOpacity>
    </View>
  );
};
