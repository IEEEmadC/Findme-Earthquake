import React from "react";
import { Text } from "native-base";
import { Image, TouchableOpacity,StyleSheet, Dimensions } from 'react-native'

function Avatar (props){
    return(
        <TouchableOpacity onPress={props.onPress}>
            <Image
                style= {[
                    props.small?styles.small:styles.small, 
                    props.big && styles.big, 
                    props.medium && styles.medium ]}
                source={props.source }
            />
            <Text>{props.name}</Text>
            {props.children}
        </TouchableOpacity >
    );
}
const screen = Dimensions.get('window');
const styles = StyleSheet.create({
    big: {
        width: 160,
        height: 160,
        borderRadius: 80   
    },
    medium: {
        width: 80,
        height: 80,
        borderRadius: 40   
    },
    small: {
        width: 40,
        height: 40,
        borderRadius: 20   
    },
   
});

export default Avatar;