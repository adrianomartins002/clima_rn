import {createStackNavigator} from 'react-navigation-stack';

import * as pages from './pages';

/**
 * Cada stack fica responsável por meio que "uma etapa" do
 * aplicativo.
 * Na stack Carregamento são englobadas as pages necessárias para o
 * validação e carregamento do app, fazendo a transição para o início caso
 * os requisitos sejam atendidos (entre eles: internet, permissão de localização)
 */

export const Carregamento = createStackNavigator({
  ...pages,
});
