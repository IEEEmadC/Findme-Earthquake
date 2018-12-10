import React, { Component } from 'react';
import {View, Text, Icon, ListItem, Body } from 'native-base';
import styles from '../styles/index'

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
                                <Text style={styles.textBody}> {index} </Text>
                            </Body>
                        </ListItem>
                    )
                })

            }

        </View>

    )
}

export default NewsListItem;
