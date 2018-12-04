import React, { Component } from 'react';
import { Card, CardItem, View, Text, Left, Right, Content, Button } from 'native-base';
import { Image, TouchableOpacity, Modal, WebView, StyleSheet, Dimensions, StatusBar } from 'react-native';
const screen = Dimensions.get('window');

class CardNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            new: [],
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

                <View>
                    <WebView
                        source={{ uri: this.state.uri }} />
                </View>
                <View>
                    <Text>{this.state.new.urlToImage}</Text>
                    <Text>
                        {this.state.new.title}
                    </Text>
                </View>

            </Modal>
        )
    }
    onPressNew = (event) => {
        // this.props.onPressCard(this.props)
        this.setState({
            new: this.props,
            uri: this.props.urlToImage,
            modalVisible: !this.state.modalVisible
        })
        console.log(this.state.new);
    }

    render() {
        return (
            <Content>
                {this.rendermodal()}
                <Card>
                    <CardItem>
                        <TouchableOpacity onPress={this.onPressNew}>
                            <View>
                                <Image
                                    style={styles.imageNew}
                                    source={{ uri: this.props.urlToImage }}
                                />
                            </View>
                            <View >
                                <Text>{this.props.title}</Text>
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
    imageNew: {
        width: 0.9 * screen.width,
        height: screen.width / 3,
        borderRadius: 10,
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

export default CardNews;
