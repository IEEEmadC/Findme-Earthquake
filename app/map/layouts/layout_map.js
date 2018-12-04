import React from "react";
import { StyleSheet, Dimensions, PermissionsAndroid,View } from 'react-native';
import { Container } from "native-base";
import MapContainer from '../containers/container_map'
import FABButton from '../components/FabButton'
import ItemsFAB from '../../../resources/pins/pinData'

const screen = Dimensions.get('window');

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  async componentWillMount() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )
    } catch (err) {
      console.warn(err)
    }
  }

  onPressButton = () => {
    this.setState({
        active: !this.state.active,
    })
  }

  render() {
    return (
      <Container>
        <MapContainer/>
        <FABButton
          onPress={this.onPressButton}
          items={ItemsFAB}
        />
        {
          this.state.active ?
            <View style={styles.dot} />
            : null
        }
      </Container>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  dot: {
    justifyContent: 'center',
    alignContent: 'center',
    width: 10,
    height: 10,
    position: 'absolute',
    top: (height) / 2.35, //Aqui cambiar pues no se esta rendereando bien la pantalla en el medio 
    backgroundColor: 'green',
    left: (width) / 2.05
  }
});

