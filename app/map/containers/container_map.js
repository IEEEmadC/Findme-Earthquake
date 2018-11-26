import React from "react";
import { PermissionsAndroid } from 'react-native';
import { Container} from "native-base";
import MapContainer from '../components/mapComponent'

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {region: {}};
    }
    componentWillMount() {

        if (PermissionsAndroid.check("android.permission.ACCESS_FINE_LOCATION")) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState({
                        region: {...position.coords},
                    })
                }
            )
        } 
    }
    
    render() {
        return (
            <Container>
                <MapContainer region={this.props.region} />
            </Container >
        );
    }
}

