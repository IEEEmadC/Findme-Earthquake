import React, { Component } from 'react';
import { Card, CardItem, View, Text, Left, Right, CheckBox, ListItem, Body, Button } from 'native-base';
import { Image, TouchableOpacity, Modal, WebView, StyleSheet, Dimensions, StatusBar } from 'react-native';
const screen = Dimensions.get('window');


function NewsCheckList(props) {
    return (
        props.content.map(index => {
            return (
                <ListItem>
                    <View style={styles.viewCheck}>
                        <CheckBox checked={false}/>
                    </View>
                    <Body>
                        <Text style={styles.textBody}> {index} </Text>
                    </Body>
                </ListItem>
            )
        })
    )
}
const styles = StyleSheet.create({

    textBody: {
        fontWeight: 'normal',
        fontSize: (screen.height / screen.width) * 10,
        color: 'black'
    },
    viewCheck: {
        padding:0,
        width: screen.width / 8,
        height: screen.width / 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default NewsCheckList;
