import React, { Component } from 'react';
import Navigator from './register/containers/registerNavigator'
import { Provider } from "react-redux";
import store from './store';
import FirebaseData from './resources/data/firebaseData'
import YoutubeSearch from './resources/data/youtubeSearch'


import News from './app/news/layouts/news_detail';




// async componentDidMount() {
//   const v = await FirebaseData.getVideo();
//   console.log(v);
//   console.log("Aqui.....");    
//   const y = await YoutubeSearch.getvideo(v);
//   console.log(y);
//   const article= await FirebaseData.getArticles();
//   console.log(article)
//   //const pin= await FirebaseData.getPinsMaps();
//   store.dispatch({
//     type: 'GET_VIDEOS',
//     payload:{
//       videos: y
//     }
//   })
//   store.dispatch({
//     type: 'GET_ARTICLES',
//     payload:{
//       articles: article
//     }
//   })
//   // store.dispatch({
//   //   type: 'GET_PIN_MAPS',
//   //   payload:{
//   //     pins: pin
//   //   }
//   // })

// }
// render() {
//   return (
//     <Provider
//       store={store}
//     >
//       <Navigator />
//     </Provider>
//   )
// }

import data from './resources/data/object';

class App extends Component {

  
  
  render() {
    console.log(data);
    return (
      <News
        {...data[0]}
      ></News>
    )
  }

}

export default App;