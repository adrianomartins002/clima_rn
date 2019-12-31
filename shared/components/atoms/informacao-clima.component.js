import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export const Info = ({item}) => {
  return (
    <View style={styles.containerInfo}>
      <View style={styles.containerTexts}>
        <Text style={[{flex: 0.75}, styles.text]}>{item.titulo}</Text>
        <Text style={[styles.text]}> {item.descricao}</Text>
      </View>
      <View style={[styles.containerIcone]}>{item.icone()}</View>
    </View>
  );
};

Info.propTypes = {
  titulo: PropTypes.string,
  descricao: PropTypes.string,
};

const styles = StyleSheet.create({
  containerInfo: {
    marginTop: 2,
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    flexDirection: 'row',
  },
  containerTexts: {flex: 0.95},
  containerIcone: {marginTop: 8},
  text: {
    color: '#FFF',
    fontWeight: '800',
  },
});
