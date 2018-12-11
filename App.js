import React, { Component } from 'react';
// import Navigator from './register/containers/registerNavigator'
import store from './store';
import FirebaseData from './resources/data/firebaseData'
import YoutubeSearch from './resources/data/youtubeSearch'
import { Provider, connect } from 'react-redux';

//import Alert from './modalExample';
import Alert from './app/news/containers/container_news';
import data from './resources/data/object';

import TabNavigator from './app/navigation/profile-navigation'
import AppNavigatorWithState from './app/navigation/app-navigator-with-state'

// const AppTab = reduxifyNavigator(TabNavigator, "root");

// const mapStateToProps = (state) => ({
//     state: state.nav,
// });

// const AppWithNavigationState = connect(mapStateToProps)(AppTab);




class App extends Component {
  
  
  async componentDidMount() {
    const v = await FirebaseData.getVideo();
    const y = await YoutubeSearch.getvideo(v);
    const article= await FirebaseData.getArticles();
    console.log(v);
    console.log(y);
    
    
    // const pins= await 
    // FirebaseData.getPinsMaps(this.ojalaFuncione);
    // console.log(Object.values(pins));
   
    store.dispatch({
      type: 'GET_VIDEOS',
      payload:{
        videos: y
      }
    })
    store.dispatch({
      type: 'GET_ARTICLES',
      payload:{
        articles: article
      }
    })
  }
  
  
  
  ojalaFuncione =(valor )=>{
    // console.log(valor);
    // store.dispatch({
    //   type: 'GET_PIN_MAPS',
    //   payload:{
    //     pins: valor
    //   }
    // })
  }

  // render() {
  //   return (
  //     <Provider
  //       store={store}
  //     >
  //        {/* <AppWithNavigationState/> */}
  //        <AppNavigatorWithState/>
  //     </Provider>
  //   )
  // }
  
  
  render() {
    return (
      <TabNavigator/>
    )
  }

}

export default App;