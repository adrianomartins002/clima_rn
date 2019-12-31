import {createStackNavigator} from 'react-navigation-stack';

import * as pages from './pages';

/**
 * Cada stack fica responsável por meio que "uma etapa" do
 * aplicativo.
 */

export const Permissoes = createStackNavigator({
  ...pages,
});
