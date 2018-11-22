
import React from "react";
import {
  StyleSheet,
  Dimensions,
  PermissionsAndroid
} from 'react-native';
import {
  Container,
} from "native-base";
import MapContainer from '../containers/container_map'
import FABButton from '../components/FabButton'
const screen = Dimensions.get('window');

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  async componentWillMount(){
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )
    } catch (err) {
      console.warn(err)
    }
  }

  render() {
    return (
      <Container>
        <MapContainer style={styles.map}/>
        <FABButton />

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
    ...StyleSheet.absoluteFillObject,
  },
});