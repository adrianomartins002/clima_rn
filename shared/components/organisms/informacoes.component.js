import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import PropTypes from 'prop-types';

import {Info} from '../atoms';
import Thermometer from '../../common/assets/illustrations/thermometer.svg';
import Pressure from '../../common/assets/illustrations/pressure.svg';
import Cloud from '../../common/assets/illustrations/cloud-min.svg';
import Wind from '../../common/assets/illustrations/wind.svg';

export const Informacoes = props => {
  const dados = montarDados(props);
  return (
    <View style={styles.containerLista}>
      <Text style={styles.textDetalhes}>Detalhes</Text>
      <FlatList
        renderItem={item => Info(item)}
        data={dados}
        style={styles.flatList}
        keyExtractor={item => item.titulo}
      />
    </View>
  );
};

Informacoes.propTypes = {
  sensacao: PropTypes.number,
  vento: PropTypes.number,
  nuvens: PropTypes.number,
  pressao: PropTypes.number,
};

function montarDados(dados) {
  return [
    {
      titulo: 'Sensação',
      descricao: dados.sensacao + 'º',
      icone: () => <Thermometer width={25} height={25} fill={'#FFF'} />,
    },
    {
      titulo: 'Vento',
      descricao: dados.vento,
      icone: () => <Wind width={25} height={25} fill={'#FFF'} />,
    },
    {
      titulo: 'Nuvens',
      descricao: dados.nuvens,
      icone: () => <Cloud width={25} height={25} fill={'#FFF'} />,
    },
    {
      titulo: 'Pressão atmosférica',
      descricao: dados.pressao + ' mb',
      icone: () => <Pressure width={25} height={25} fill={'#FFF'} />,
    },
  ];
}

const styles = StyleSheet.create({
  containerLista: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, .3)',
    paddingHorizontal: 14,
  },
  textDetalhes: {
    fontSize: 18,
    marginTop: 8,
    borderBottomWidth: 1,
    color: '#ECEBEB',
    borderBottomColor: '#FFF',
    fontWeight: 'bold',
    width: '100%',
  },
  text: {
    color: '#FFF',
    fontWeight: '800',
  },
  flatList: {width: '100%'},
});
