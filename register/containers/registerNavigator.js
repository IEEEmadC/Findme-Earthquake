import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Register from './registerContainer'
import Confirmation from './registerContainer_confirmation'
import Home from '../../app/containers/AppNavigator';
import Loading from '../../loading/container/loading_container'
const AuthStack = createStackNavigator({ 
    Loading:{
      screen: Loading,
      navigationOptions: ()=>({
        header:null,
      })
    },
    Register,
    Confirmation
});
const AppStack = createStackNavigator({
  Home:{
    screen:Home,
    navigationOptions: ()=>({
      header:null,
    })
  },
  
})

export default createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
  }
);