import React from "react";
import {
    StyleSheet,
  } from 'react-native';
import MapView, { ProviderPropType, Marker, AnimatedRegion } from 'react-native-maps';

function MapContainer(props) {
    return(
        <MapView
            provider={props.provider}
            style={styles.map}
            initialRegion={{
              latitude: props.latitude,
              longitude: props.longitude,
              latitudeDelta: props.latitudeDelta,
              longitudeDelta: props.longitudeDelta,
            }}
          >
            
            
          </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
    }
  });
  
export default MapContainer;