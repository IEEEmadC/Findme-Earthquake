import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Register from './registerContainer'
import Confirmation from '../layouts/layout_confirmation'

const AuthStack = createStackNavigator({ 
    Register: Register,
    Confirmation
});

export default createSwitchNavigator(
  {
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);