/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Carregamento} from './shared/stacks/carregamento';
import {Permissoes} from './shared/stacks/permissoes';
import {Inicio} from './shared/stacks/principal';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

/**
 * O App navigator possui as stacks de cada fluxo englobadas pelo switchnavigator
 * para que uma stack não interfira na outra e ainda assim possam ser acessadas
 * pelo navigator
 */
const AppNavigator = createSwitchNavigator({
  Carregamento: {screen: Carregamento, path: 'carregamento'},
  Permissoes: {screen: Permissoes, path: 'permissoes'},
  Inicio: {screen: Inicio, path: 'inicio'},
});

/**
 * O `AppContainer` é um componente que contém todas as
 * páginas que podem ser acessadas por meio de navegação.
 */
const AppContainer = createAppContainer(AppNavigator);

export function App(props) {
  return <AppContainer />;
}
