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
        latitude: props.latitude ? props.latitude: 37.78825,
        longitude: props.longitude? props.longitude : -122.4324,
        latitudeDelta: props.latitudeDelta?  props.latitudeDelta: 0.0922,
        longitudeDelta: props.longitudeDelta? props.longitudeDelta:0.0421,
      }}
      onRegionChangeComplete={props.onRegionChangeComplete} 
      region={props.region} 
    >
      {props.children}
    </MapView>
  )
}

export default MapContainer;