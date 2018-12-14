import React, { Component } from 'react';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Text } from 'native-base';
import FirebaseData from './resources/data/firebaseData';
import YoutubeSearch from './resources/data/youtubeSearch';
import AppNavigatorWithState from './app/navigation/app-navigator-with-state';








class App extends Component {


  // async componentDidMount() {
  //   const v = await FirebaseData.getVideo();
  //   const y = await YoutubeSearch.getvideo(v);
  //   const article = await FirebaseData.getArticles();
  //   console.log(v);
  //   console.log(y);


  //   // const pins= await 
  //   // FirebaseData.getPinsMaps(this.ojalaFuncione);
  //   // console.log(Object.values(pins));

  //   store.dispatch({
  //     type: 'GET_VIDEOS',
  //     payload: {
  //       videos: y
  //     }
  //   })
  //   store.dispatch({
  //     type: 'GET_ARTICLES',
  //     payload: {
  //       articles: article
  //     }
  //   })
  // }

  // ojalaFuncione =(valor )=>{
  //   // console.log(valor);
  //   // store.dispatch({
  //   //   type: 'GET_PIN_MAPS',
  //   //   payload:{
  //   //     pins: valor
  //   //   }
  //   // })
  // }

  render() {
    return (
      <Provider
        store={store}>
        <PersistGate
          loading={<Text>Cargando...</Text>}
          persistor={persistor}
        >
          <AppNavigatorWithState />
        </PersistGate>
      </Provider>
    )
  }
}

export default App;