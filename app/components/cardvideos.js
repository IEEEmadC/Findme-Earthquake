import React, { Component } from 'react';
import { Card, CardItem, View, Text, Left, Right, Content, Button } from 'native-base';
import { Image, TouchableOpacity, Modal, WebView, StyleSheet, Dimensions, StatusBar } from 'react-native';
const screen = Dimensions.get('window');

// function CardVideo(props) {

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
                <Card>
                    <CardItem>
                        <TouchableOpacity style={styles.touchablestyle} onPress={this.onP}>
                            <View >
                                <Image
                                    style={styles.imageVideo}
                                    source={{ uri: this.props.snippet.thumbnails.medium.url }}
                                />
                            </View>
                            <View style={styles.touchablestyle}>
                                <Text style={styles.textTitle}>{this.props.snippet.title} </Text>
                                <Text style={styles.textChannel}>{this.props.snippet.channelTitle}</Text>
                                <Text style={styles.textPublished}>{this.props.snippet.publishedAt}</Text>
                            </View>
                        </TouchableOpacity>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}
const styles = StyleSheet.create({
    touchablestyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageVideo: {
        width: 0.9*screen.width,
        height: screen.width/3,
        borderRadius:10,
        justifyContent: 'center'
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: (screen.height / screen.width) * 10,
    },
    textChannel: {
        fontWeight: 'normal',
        fontSize: (screen.height / screen.width) * 8,
    },
    textPublished: {
        fontWeight: 'normal',
        fontSize: (screen.height / screen.width) * 7,
    }
});

export default CardVideo;