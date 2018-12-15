import React, { Component } from 'react';
import { Card, CardItem, View, Text, Content,Left,Body } from 'native-base';
import { Image, TouchableOpacity, Modal, WebView, StyleSheet, Dimensions, StatusBar } from 'react-native';
import styles from '../styles/index'
const screen = Dimensions.get('window');
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

class CardVideo extends Component {

    onPress = () =>{

        this.props.dispatch({
            type: 'SET_SELECT_VIDEO',
            payload: {
                selectedVideo: this.props,
            }
        })

        this.props.dispatch(
            NavigationActions.navigate({
              routeName: 'ModalVideo'
        }))    
    }
    
    render() {
        return (
            <Content>
                <Card transparent>
                    <TouchableOpacity onPress={this.onPress}>
                        <CardItem cardBody>
                            <Left>
                                <Image
                                    style={styles.imageVideo}
                                    source={{ uri: this.props.snippet.thumbnails.medium.url }}
                                />
                            </Left>
                            <Body style={{paddingLeft:20}}>
                                <Text style={styles.textTitleVideo}>{this.props.snippet.title} </Text>
                                <Text style={styles.textChannel}>{this.props.snippet.channelTitle}</Text>
                                <Text style={styles.textPublished}>{new Date(this.props.snippet.publishedAt).toUTCString()}</Text>
                            </Body>
                        </CardItem>
                    </TouchableOpacity>
                </Card>
            </Content>
        );
    }
}

export default connect (null) (CardVideo);