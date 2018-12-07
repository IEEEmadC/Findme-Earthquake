import React, { Component } from 'react';
import { Card, CardItem, View, Text, Left, Icon, CheckBox, ListItem, Body, Button } from 'native-base';
import { Image, TouchableOpacity, Modal, WebView, StyleSheet, Dimensions, StatusBar } from 'react-native';
const screen = Dimensions.get('window');


function NewsListItem(props) {
    var number = 1;
    return (
        <View>
            <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>{props.title}</Text>
            </View>
            {

                props.content.map(index => {
                    return (
                        <ListItem>
                            <View style={styles.viewCircle}>
                                <Icon type='Entypo' name="check" />
                                {/* <Text style={styles.textNumber}>{number++}</Text> */}
                            </View>
                            <Body>
                                <Text> {index} </Text>
                            </Body>
                        </ListItem>
                    )
                })

            }

        </View>

    )
}
const styles = StyleSheet.create({
    viewTitle:{
        alignContent:'center',
        alignItems:'center'
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: (screen.height / screen.width) * 13,
        color: 'green'
    },
    textNumber: {
        fontWeight: 'bold',
        fontSize: (screen.height / screen.width) * 8,
        color: 'white'
    },
    textBody: {
        fontWeight: 'bold',
        fontSize: (screen.height / screen.width) * 9,
        color: 'black'
    },
    viewCircle: {
        paddingTop: 2,
        borderRadius: screen.width / 22,
        width: screen.width /11,
        height: screen.width /11,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
});

export default NewsListItem;
