import React from "react";
import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  Button,
  Container,
  Body,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Content,
} from "native-base";
import firebase from 'react-native-firebase';
import MapContainer from '../components/MapContainer'
import FabButton from '../components/FabButton'
import AnimatedRegion from 'react-native-maps';
const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = -0.251573;
const LONGITUDE = -78.520988;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
      }),
    };
  }
  render() {
    return (
      <Container>
          <FabButton />
          <MapContainer latitude={LATITUDE} longitude={LONGITUDE} longitudeDelta={LONGITUDE_DELTA} latitudeDelta={LATITUDE_DELTA}
          />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    //...StyleSheet.absoluteFillObject,
    padding: 100
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
    width: screen.width,
    height: screen.height / 20,
    borderRadius: 30,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});