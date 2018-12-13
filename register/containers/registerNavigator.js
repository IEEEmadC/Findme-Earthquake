import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Register from './registerContainer'
import Confirmation from './registerContainer_confirmation'
import Home from '../../app/navigation/tab';
import Loading from '../../loading/container/loading_container'
import InformationUser from './registerContainerInformationUser'
const AuthStack = createStackNavigator({
  Loading: {
    screen: Loading,
    navigationOptions: () => ({
      header: null,
    })
  },
  Register: {
    screen: Register,
    navigationOptions: () => ({
      title: 'Verifica tu número',
    })
  },
  Confirmation:{
    screen:Confirmation,
    navigationOptions:()=>({
      title:"Verificando Número"
    })
  },
  InformationUser:{
    screen: InformationUser,
    navigationOptions:()=>({
      title:"Agrega tus datos"
    })
  },
});
const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      header: null,
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