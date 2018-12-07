import React from "react";
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

function MapContainer(props) { 
  return (
    <MapView 
      showsUserLocation={true}
      provider='google'
      style={{...StyleSheet.absoluteFillObject}} 
      onPress={props.onPressMap}
      initialRegion={{
        latitude: props.latitude,
        longitude: props.longitude,
        latitudeDelta: props.latitudeDelta,
        longitudeDelta: props.longitudeDelta,
      }}
      
      onRegionChangeComplete={props.onRegionChangeComplete} 
      region={props.region} 
    >
      {props.children}
    </MapView>
  )
}

export default MapContainer;