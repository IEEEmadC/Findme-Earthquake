import React, { Component } from 'react';
import { Spinner, Container, Text } from 'native-base';
import { PermissionsAndroid } from 'react-native';
import FirebaseData from '../../resources/data/firebaseData';
import YoutubeSearch from '../../resources/data/youtubeSearch';
import { store } from '../../store';

class DowloadingData extends Component {


    async componentDidMount() {
        console.log('descargando');

        const v = await FirebaseData.getVideo();
        const y = await YoutubeSearch.getvideo(v);
        const article = await FirebaseData.getArticles();
        // const pins = await FirebaseData.getPinsMaps(this.dispatchPins);
        // console.log(Object.values(pins));

        store.dispatch({
            type: 'GET_VIDEOS',
            payload: {
                videos: y
            }
        })
        store.dispatch({
            type: 'GET_ARTICLES',
            payload: {
                articles: article
            }
        })
        console.log(y);
        console.log(article);

        // try {
        //     const granted = await PermissionsAndroid.request(
        //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        //     )
        // } catch (err) {
        //     console.warn(err)
        // }
        this.props.navigation.navigate('App')


    }
    // dispatchPins = (valor) => {
    //     console.log(valor);
    //     store.dispatch({
    //         type: 'GET_PIN_MAPS',
    //         payload: {
    //             pins: valor
    //         }
    //     })
    // }

    render() {

        return (
            <Container style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <Spinner />
                <Text style={{ textAlign: 'center', fontSize: 50, fontWeight: 'bold' }}>Estamos Preparando todo</Text>
            </Container>
        )
    }

}


export default DowloadingData;