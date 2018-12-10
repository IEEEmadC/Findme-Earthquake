import React, { Component } from 'react';
import { Card, CardItem, View, Text, Content } from 'native-base';
import { Image, TouchableOpacity, Modal, WebView} from 'react-native';
import styles from '../styles/index'
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
                                <Text style={styles.textBody}>{this.props.snippet.channelTitle}</Text>
                                <Text style={styles.textBody}>{this.props.snippet.publishedAt}</Text>
                            </View>
                        </TouchableOpacity>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}

export default CardVideo;