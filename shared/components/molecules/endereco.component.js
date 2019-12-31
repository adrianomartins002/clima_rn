import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

/**
 * Componente funcional com informações da localização atual via gps do usuario
 * @param {*} props
 */

export const Endereco = React.memo(props => {
  let localizacao = props.localizacao;

  //validacao utilizada para não haver quebra do layout por conta do tamanho
  if (props.localizacao.lenght > 13) {
    localizacao = localizacao.slice(0, 13) + '...';
  }
  return (
    <View style={styles.container}>
      {/* cidade */}
      <Text style={styles.textLocalizacao}>{localizacao}</Text>
      {/* estado */}
      <Text style={styles.textPais}>{props.pais}</Text>
    </View>
  );
});

Endereco.propTypes = {
  localizacao: PropTypes.string,
  pais: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLocalizacao: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF',
    overflow: 'visible',
  },
  textPais: {fontSize: 22, color: '#FFF'},
});
