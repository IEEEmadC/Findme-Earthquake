import React from "react";
import {
    Dimensions, StyleSheet
} from 'react-native';
import {
    Container,
    View,
    Button,
    Text,
    Image
} from "native-base";
import MapContainer from '../components/mapComponent'
import { Marker } from 'react-native-maps';
const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.03;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01; //For DraggableMarker
let id = 0;

function log(eventName, e) {
    console.log(eventName, e.nativeEvent);
}

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: null,
                longitude: null,
                latitudeDelta: null,
                longitudeDelta: null
            },//Change position
            a: {
                latitude: null,
                longitude: null,
            },
            b: {
                latitude: null,
                longitude: null,
            },
            active: false,

            markers: [],
        };
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitud = position.coords.latitude
                const longitud = position.coords.longitude
                const accuracy = position.coords.accuracy
                this.setState({
                    region: {
                        latitude: latitud,
                        longitude: longitud,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA
                    },
                    b: {
                        latitude: latitud - SPACE,
                        longitude: longitud - SPACE
                    }
                })
                console.log("Estoy en lat: " + latitud + " long: " + longitud + " y el accurency: " + accuracy)
            }
        )
    }
    onMapPress(e) {
        this.setState({
            markers: [
                {
                    coordinate: e.nativeEvent.coordinate,
                    key: id++,
                },
            ],
        });
    }
    onRegionChangeComplete = (region) => {
        console.log ("Estoy en lat: " + region.latitude + " long: " + region.longitude)

    }
    onPressButton =()=>{
        this.setState({
            active: !this.state.active,
        })
    }
    render() {

        return (
            <Container>
                <MapContainer
                    latitude={this.state.region.latitude} longitude={this.state.region.longitude} latitudeDelta={LATITUDE_DELTA} longitudeDelta={LONGITUDE_DELTA}
                    onRegionChangeComplete={ this.state.active? this.onRegionChangeComplete : null}
                    provider='google'
                >
                </MapContainer>
                <Button on onPress={this.onPressButton}>
                    <Text>ver view</Text>
                </Button>
                {this.state.active ?
                    <View style={styles.dot}>
                    </View>
                    : null}
            </Container >
        );
    }
}
/* 
 <MapContainer latitude={this.state.region.latitude} longitude={this.state.region.longitude} latitudeDelta={LATITUDE_DELTA} longitudeDelta={LONGITUDE_DELTA} />
*/
const { height, width } = Dimensions.get('window');
const dotSize = 10;
const styles = StyleSheet.create({
    dot: {
        justifyContent: 'center',
        alignContent: 'center',
        width: dotSize,
        height: dotSize,
        position: 'absolute',
        top: (height) / 2.35, //Aqui cambiar pues no se esta rendereando bien la pantalla en el medio 
        backgroundColor: 'green',
        left: (width) / 2.05
    }
});