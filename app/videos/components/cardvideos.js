import React, { Component } from 'react';
import { Card, CardItem, View, Text, Content,Left,Body } from 'native-base';
import { Image, TouchableOpacity, Modal, WebView, StyleSheet, Dimensions, StatusBar } from 'react-native';
import styles from '../styles/index'
const screen = Dimensions.get('window');
class CardVideo extends Component {

    ////////////////
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            uri: ''
        };
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    rendermodal() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                onOrientationChange='landscape'
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    this.setModalVisible(false);
                }}>
                <WebView
                    style={{ flex: 1 }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: this.state.uri }}
                />
            </Modal>
        )
    }
    ///////////////////////////

    onP = (event) => {
        this.props.onPressCard(this.props)
        this.setState({
            uri: 'https://www.youtube.com/embed/' + this.props.id.videoId,
            modalVisible: !this.state.modalVisible
        })
    }

    render() {
        return (
            <Content>
                {this.rendermodal()}
                <Card transparent>
                    <TouchableOpacity onPress={this.onP}>
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

export default CardVideo;