import React from 'react';
import { DrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import{Icon} from 'native-base'
import MapScreen from '../map/layouts/layout_map';
import SideBar from '../layouts/layout_sideBar';
import NewsScreen from '../news/containers/container_news'
import VideosScreen from '../videos/containers/container_videos'
import Profile from '../profile/containers/container_profile';



const HomeTab = createMaterialTopTabNavigator(
  {
    Profile:{
      screen: Profile,
      params: { banner: 'Home Screen' },
      navigationOptions :{
        title: "kkkk",
        tabBarIcon: ({tintColor})=>
         (<Icon type="Entypo" name="fingerprint" style={{fontSize: 20,color: tintColor}}/>)
      },
    
    },
    News:{
      screen: NewsScreen,
      navigationOptions :{
        tabBarIcon: ({tintColor})=>
         (<Icon type="Entypo" name="news"  style={{fontSize: 20,color: tintColor}}/>)
      },
    
    },
    Video:{
      screen: VideosScreen,
      navigationOptions :{
        tabBarIcon: ({tintColor})=>
         (<Icon type="Entypo" name="video" style={{fontSize: 20, color: tintColor}}/>)
      },
    
    },
    Map:{
      screen: MapScreen,
      navigationOptions :{
        tabBarIcon: ({tintColor})=>
         (<Icon type="Entypo" name="map" style={{fontSize: 20, color: tintColor}}/>)
      },
    
    },
    
    //VideosScreen,
    // MapScreen,
  },{
    tabBarPosition: 'bottom',
    tabBarOptions:{
      activeTintColor: 'black',
      inactiveTintColor :'gray',
      showIcon: true,
      showLabel: false,
      style:{
        backgroundColor: 'white'
      }
    }
  }
);


const HomeScreenRoute = DrawerNavigator(
  {
    Home: HomeTab,
  },
  {
    contentComponent: props => <SideBar
      uri="https://media.aweita.larepublica.pe/678x508/aweita/imagen/2018/02/08/noticia-persona-positiva.png"
      name="Nombre :)"/>
  }
);
export default HomeScreenRoute;