/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import {Carregamento} from './shared/stacks/carregamento';
import {Inicio} from './shared/stacks/principal';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createSwitchNavigator({
  Carregamento: {screen: Carregamento, path: 'carregamento'},
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
