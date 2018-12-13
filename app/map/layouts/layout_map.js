import React from "react";
import { StyleSheet, Dimensions, PermissionsAndroid, View, Alert } from 'react-native';
import { Container, Button, Text, Icon, Footer, FooterTab, Header, Content } from "native-base";
import MapContainer from '../containers/container_map'
import FABButton from '../components/FabButton'
import ItemsFAB from '../../../resources/pins/pinData'
import FirebaseData from '../../../resources/data/firebaseData'
const screen = Dimensions.get('window');

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false,
      marker: {},
      visibleFab: true,
      region: {},
      markers: [],
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

  onPressItem = (marker) => {
    this.setState({ marker, visibleFab: false })

  }
  sendToFirebase = (marker) => {
    console.log('Guardando: ' + marker);
    FirebaseData.setPinsMaps(marker, this.state.region)
  }

  onRegionChangeComplete = (region) => {
    this.setState({
      region
    })

  }

  onPressButton = () => {
    this.setState({ active: false, visibleFab: true })
    Alert.alert('Confirmación', 'Esta seguro de guardar este sitio', [
      { text: 'Cancel' },
      { text: 'OK', onPress: () => this.sendToFirebase(this.state.marker) }
    ])

  }

  render() {
    return (
      <Container>
        <Footer>
          <FooterTab>
            <Button>
              <Icon type="MaterialCommunityIcons" name="hospital" />
            </Button>
            <Button>
              <Icon type="MaterialCommunityIcons" name="security-account" />
            </Button>
            <Button>
              <Icon type="MaterialCommunityIcons" name="fire-truck" />
            </Button>
            <Button>
              <Icon type="MaterialCommunityIcons" name="map-marker-plus" />
            </Button>
          </FooterTab>
        </Footer>
        <MapContainer
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        {
          this.state.visibleFab ?
            <FABButton
              onPressItem={this.onPressItem}
              items={ItemsFAB}
            />
            :
            <View style={styles.contentStyle}>
              <Button block
                onPress={this.onPressButton}>
                <Text>Listo</Text>
              </Button>
            </View>

        }
        {
          !this.state.visibleFab &&
          <Icon style={styles.dot} type="MaterialCommunityIcons" name="map-marker" />
        }
      </Container>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  contentStyle: {
    position: 'absolute',
    width: screen.width,
    bottom: 10,
    padding: 10,
  },
  dot: {
    justifyContent: 'center',
    alignContent: 'center',
    width: 30,
    height: 30,
    position: 'absolute',
    top: (height) / 2.35, //Aqui cambiar pues no se esta rendereando bien la pantalla en el medio 
    left: (width) / 2.05
  }
});

