import React, { Component } from 'react';
import { Card, CardItem, View, Text, Left, Right, CheckBox, ListItem, Body, Button, Container, Content } from 'native-base';
import { Image, TouchableOpacity, Modal, WebView, StyleSheet, Dimensions, StatusBar } from 'react-native';
const screen = Dimensions.get('window');


function NewsTextContent(props) {
    
    return (
        <Content>
            <Text style={styles.textTitle}>{props.title}</Text>
            {
                props.content.map( index => 
                    <Text style={styles.textBody}>{index}</Text>
                )
            }

        </Content>

    )

}
const styles = StyleSheet.create({
    textTitle: {
        fontWeight: 'bold',
        fontSize: (screen.height / screen.width) * 11,
        color: 'black'
    },
    textBody: {
        fontWeight: 'normal',
        fontSize: (screen.height / screen.width) * 9,
        color: 'black'
    },
    viewCircle: {
        borderRadius: screen.width / 16,
        width: screen.width / 8,
        height: screen.width / 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
});

export default NewsTextContent;