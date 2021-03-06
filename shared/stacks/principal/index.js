import {createStackNavigator} from 'react-navigation-stack';

import * as pages from './pages';

/**
 * Cada stack fica responsável por meio que "uma etapa" do
 * aplicativo.
 * Na stack Inicio são englobadas as pages necessárias para o
 * início da aplicação
 */
export const Inicio = createStackNavigator({
  ...pages,
});
