import React, { Component } from 'react';
import Navigator from './register/containers/registerNavigator'
import { Provider } from "react-redux";
import store from './store';
import FirebaseData from './resources/data/firebaseData'
import YoutubeSearch from './resources/data/youtubeSearch'
// import Home from '../../app/containers/AppNavigator';
// import storage from 'redux-persist/es/storage';

export default class App extends Component {

  
  async componentDidMount() {
    const v = await FirebaseData.getVideo();
    console.log(v);
    console.log("Aqui.....");    
    const y = await YoutubeSearch.getvideo(v);
    console.log(y);
    const article= await FirebaseData.getArticles();
    console.log(article)
    //const pin= await FirebaseData.getPinsMaps();
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
    // store.dispatch({
    //   type: 'GET_PIN_MAPS',
    //   payload:{
    //     pins: pin
    //   }
    // })

  }
  render() {
    return (
      <Provider
        store={store}
      >
        <Navigator />
      </Provider>
    )
  }
}