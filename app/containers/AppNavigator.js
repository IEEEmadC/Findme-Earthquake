import React from 'react';
import {DrawerNavigator} from 'react-navigation';
import HomeScreen from '../layouts/HomeScreen';
import SideBar from '../layouts/SideBar';

const HomeScreenRoute = DrawerNavigator(
  {
    Home: HomeScreen,

  },
  {
    contentComponent: props => <SideBar 
    uri= "https://media.aweita.larepublica.pe/678x508/aweita/imagen/2018/02/08/noticia-persona-positiva.png"
    name= "User Name"></SideBar>
  }
);
export default HomeScreenRoute;