import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Sun from '../../../common/assets/illustrations/sun-glass.svg';
import {SystemUtils} from '../../../common/utils/system';

/**
 *
 * @param {*} props as propriedades vem apartir do navigation
 * a utilizada até então é o onPress, chamando como callback da página que utiliza a requisição
 * Utilizei para fazer chamada apartir da page anterior, para que tenha a possibilidade de navegação
 * para outra tela
 */

export const PermissaoLocalizacao = React.memo(props => {
  const onPress = async () => {
    const granted = await SystemUtils.requisitarPermissaoDeLocalizacao();
    if (granted !== 'denied') {
      props.navigation.navigate('Inicio');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FF8C00" barStyle="dark-content" />
      <Sun width={200} height={120} />
      <View style={styles.containerCarregando}>
        <Text style={styles.textCarregando}>
          É necessário dar permissão para localização pelo gps para utilizar os
          recursos do clima
        </Text>
        <View style={[stylesBotao.containerBotao]}>
          <TouchableOpacity onPress={onPress} style={styles.touchable}>
            <Text style={stylesBotao.textBotao}>Permitir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

/**
 * Remover o cabeçalho padrão
 */

PermissaoLocalizacao.navigationOptions = {
  header: null,
};

const stylesBotao = StyleSheet.create({
  containerBotao: {
    width: 150,
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    marginTop: 15,
    borderRadius: 25,
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textBotao: {
    fontSize: 18,
    marginTop: 10,
    color: '#FF8C00',
    alignSelf: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8C00',
  },
  textCarregando: {
    fontSize: 22,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
  },
});
