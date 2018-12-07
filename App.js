import React, { Component } from 'react';
import Navigator from './register/containers/registerNavigator'
import { Provider } from "react-redux";
import store from './store';
import FirebaseData from './resources/data/firebaseData'
import YoutubeSearch from './resources/data/youtubeSearch'


import News from './app/news/layouts/news_detail';




import data from './resources/data/object';

class App extends Component {
  
  
  async componentDidMount() {
    const v = await FirebaseData.getVideo();
    const y = await YoutubeSearch.getvideo(v);
    const article= await FirebaseData.getArticles();
    // const pins= await 
    FirebaseData.getPinsMaps(this.ojalaFuncione);
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
    console.log(valor);
    store.dispatch({
      type: 'GET_PIN_MAPS',
      payload:{
        pins: valor
      }
    })
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
  
  
  // render() {
  //   return (
  //     <News
  //       {...data[1]}
  //     ></News>
  //   )
  // }

}

export default App;