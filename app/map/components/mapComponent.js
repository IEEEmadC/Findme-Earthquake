import React from "react";
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import mapConfig from '../../mapConfig'

function MapContainer(props) {
  return (
    <MapView 
      {...mapConfig} 
      style={{...StyleSheet.absoluteFillObject}} 
      onPress={props.onPressMap}
      onRegionChangeComplete={props.onRegionChangeComplete} 
      region={props.region} 
    >
      {props.children}
    </MapView>
  )
}

export default MapContainer;