import React from 'react';
import { DrawerNavigator, createMaterialTopTabNavigator,createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base'
import MapScreen from '../map/layouts/layout_map';
import SideBar from '../sidebar/layout/layout';
import NewsScreen from '../news/containers/container_news'
import VideosScreen from '../videos/containers/container_videos'
import Profile from '../profile/containers/container_profile';
import ModalVideoScreen from '../videos/containers/modalVideo'
import Contact from '../profile/components/profileEdit';

const HomeTab = createMaterialTopTabNavigator(
  {
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
    Map:{
      screen: MapScreen,
      navigationOptions :{
        tabBarIcon: ({tintColor})=>
         (<Icon type="Entypo" name="map" style={{fontSize: 20, color: tintColor}}/>)
      },

    },

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

const stackVideos = createStackNavigator({

  Main: HomeTab,
  ModalVideo: ModalVideoScreen
},
{
  mode: 'modal',
  headerMode: 'none',
  cardStyle: {
    backgroundColor: 'white'
  },
  navigationOptions: {
    gesturesEnabled: true,
  }
}

)


const ProfileNav = createStackNavigator(
  {
      Profile: {
          screen: Profile,
      },
      ModalContact:{
        screen: Contact
      }

  }
)


const HomeScreenRoute = DrawerNavigator(
  {
    Home: {
      screen: stackVideos,
    },
    Profile: {
      screen: ProfileNav,
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