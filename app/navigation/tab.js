import React from 'react';
import { DrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Icon } from 'native-base'
import MapScreen from '../map/layouts/layout_map';
import SideBar from '../sidebar/layout/layout';
import NewsScreen from '../news/containers/container_news'
import VideosScreen from '../videos/containers/container_videos'
import Profile from '../profile/containers/container_profile';



const HomeTab = createMaterialTopTabNavigator(
  {
    // Profile:{
    //   screen: Profile,
    //   params: { banner: 'Home Screen' },
    //   navigationOptions :{
    //     title: "kkkk",
    //     tabBarIcon: ({tintColor})=>
    //      (<Icon type="Entypo" name="fingerprint" style={{fontSize: 20,color: tintColor}}/>)
    //   },

    // },
    News: {
      screen: NewsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          (<Icon type="Entypo" name="news" style={{ fontSize: 20, color: tintColor }} />)
      },

    },
    Video: {
      screen: VideosScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          (<Icon type="Entypo" name="video" style={{ fontSize: 20, color: tintColor }} />)
      },

    },
    // Map:{
    //   screen: MapScreen,
    //   navigationOptions :{
    //     tabBarIcon: ({tintColor})=>
    //      (<Icon type="Entypo" name="map" style={{fontSize: 20, color: tintColor}}/>)
    //   },

    // },

    //VideosScreen,
    // MapScreen,
  }, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: 'white'
      }
    }
  }
);


const HomeScreenRoute = DrawerNavigator(
  {
    Home: {
      screen: HomeTab,
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Editar perfil"
      }
    }
  },
  {
    contentComponent: SideBar,
  }
);
export default HomeScreenRoute;
// export default HomeTab;