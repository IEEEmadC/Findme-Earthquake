import React from 'react';
import {DrawerNavigator,createMaterialTopTabNavigator} from 'react-navigation';
import MapScreen from '../layouts/layout_map';
import SideBar from '../layouts/layout_sideBar';
import NewsScreen from '../containers/container_news'
import VideosScreen from '../containers/container_videos' 
import Player from './player';
const HomeTab = createMaterialTopTabNavigator(
  {
    Player,
    NewsScreen,
    VideosScreen,
    MapScreen, 
  }
);


const HomeScreenRoute = DrawerNavigator(
  {
    Home: HomeTab,
  },
  {
    contentComponent: props => <SideBar 
    uri= "https://media.aweita.larepublica.pe/678x508/aweita/imagen/2018/02/08/noticia-persona-positiva.png"
    name= "User Name"></SideBar>
  }
);
export default HomeScreenRoute;