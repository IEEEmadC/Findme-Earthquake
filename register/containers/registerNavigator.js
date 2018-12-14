import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Register from './registerContainer'
import Confirmation from './registerContainer_confirmation'
import Home from '../../app/navigation/tab';
import Loading from '../../loading/container/loading_container'
import InformationUser from './registerContainerInformationUser'
import DowloadingData from './dowloadingData';



const AuthStack = createStackNavigator({
  
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
  DowloadingData:{
    screen: DowloadingData,
  }
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
    Loading: Loading,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Loading',
  }
);