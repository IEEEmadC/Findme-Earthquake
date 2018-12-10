import React, { Component } from 'react';
import { View, Text, CheckBox, ListItem, Body } from 'native-base';
import styles from '../styles/index'

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


export default NewsCheckList;
