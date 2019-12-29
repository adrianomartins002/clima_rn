import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Thermometer from '../common/assets/illustrations/thermometer.svg';
import Pressure from '../common/assets/illustrations/pressure.svg';
import Cloud from '../common/assets/illustrations/cloud-min.svg';
import Wind from '../common/assets/illustrations/wind.svg';

const Info = ({item}) => {
  return (
    <View style={styles.containerInfo}>
      <View style={{flex: 0.95}}>
        <Text style={{flex: 0.75, opacity: 1}}>{item.titulo}</Text>
        <Text style={{opacity: 1}}> {item.descricao}</Text>
      </View>
      <View style={{marginTop: 8}}>{item.icone()}</View>
    </View>
  );
};

export const Informacoes = props => {
  const dados = montarDados(props);
  return (
    <View style={styles.containerLista}>
      <Text style={styles.textDetalhes}>Detalhes</Text>
      <FlatList
        renderItem={item => Info(item)}
        data={dados}
        style={{width: '100%'}}
        keyExtractor={item => item.titulo}
      />
    </View>
  );
};

function montarDados({dados}) {
  return [
    {
      titulo: 'Sencação',
      descricao: dados.sensacao,
      icone: () => <Thermometer width={25} height={25} fill="#000" />,
    },
    {
      titulo: 'Vento',
      descricao: dados.vento,
      icone: () => <Wind width={25} height={25} fill="#000" />,
    },
    {
      titulo: 'Nuvens',
      descricao: dados.nuvens,
      icone: () => <Cloud width={25} height={25} fill="#000" />,
    },
    {
      titulo: 'Pressão atmosférica',
      descricao: dados.pressao,
      icone: () => <Pressure width={25} height={25} fill="#000" />,
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
    backgroundColor: '#FFF',
    opacity: 0.5,
    paddingHorizontal: 14,
  },
  textDetalhes: {
    fontSize: 18,
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    fontWeight: 'bold',
    width: '100%',
  },
  containerInfo: {
    marginTop: 2,
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    flexDirection: 'row',
  },
  text: {
    fontSize: 100,
    fontWeight: '800',
  },
});
