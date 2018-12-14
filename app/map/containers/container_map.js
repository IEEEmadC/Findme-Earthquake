import React from "react";
import { PermissionsAndroid, Dimensions } from 'react-native';
import { Container } from "native-base";
import MapContainer from '../components/mapComponent'
import { Marker } from 'react-native-maps'
import { connect } from 'react-redux'

function mapStateToProps(state) {

    return {
        markers: state.pins.pins
    }
}
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.03;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
class MapScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {}, 
            initialRegion: {},
            active: true,
            markers: [],
        };
    }
    onRegionChangeComplete = (region) => {
        this.props.onRegionChangeComplete(region)
    }
    componentWillMount() {

        if (PermissionsAndroid.check("android.permission.ACCESS_FINE_LOCATION")) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitud = position.coords.latitude
                    const longitud = position.coords.longitude
                    this.setState({
                        region: {
                            latitude: latitud,
                            longitude: longitud,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA
                        },
                    })
                }
            )
        }



    }


    render() {
        // const pinsFood = Object.values(this.props.markers.food);
        // const pinsSecurity= Object.values(this.props.markers.security);
        // const pinsStreet= Object.values(this.props.markers.street);
        
        return (
            <Container>
                <MapContainer
                    latitude={this.state.region.latitude} 
                    longitude={this.state.region.longitude} 
                    latitudeDelta={LATITUDE_DELTA} 
                    longitudeDelta={LONGITUDE_DELTA}
                    onRegionChangeComplete={this.state.active ? this.onRegionChangeComplete : null}
                >
                    {/* {pinsFood.map(marker => (
                        <Marker
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude
                            }}
                            title={"Centro de Acopio"}
                            description={""}
                            pinColor='#00FF00'
                        />
                    ))
                    }
                    {pinsSecurity.map(marker => (
                        <Marker
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude
                            }}
                            title={"Sitio Seguro/Albergue"}
                            description={""}
                            pinColor='#0000FF'
                        />
                    ))
                    }
                    {pinsStreet.map(marker => (
                        <Marker
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude
                            }}
                            title={"Calle Comprometida"}
                            description={""}
                            pinColor='#FF0000'
                        />
                    ))
                    } */}
                </MapContainer>
            </Container >
        );
    }
}
export default MapScreen;

// export default connect(mapStateToProps)(MapScreen)