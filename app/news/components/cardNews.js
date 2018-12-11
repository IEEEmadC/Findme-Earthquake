import React, { Component } from 'react';
import { Card, CardItem, View, Text, Content, Icon, Button, Title } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import styles from '../styles/index';
import Modal from '../components/newsModal';
import icons from '../../../resources/values/icons';


class CardNews extends Component {

    state = {
        modalVisible: false,
    };
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <Content>
                <Modal modalVisible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}
                    content={{...this.props}}
                />
                <Card>
                    <CardItem cardBody >
                        <TouchableOpacity
                            style={styles.cardContainer}
                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        >
                            <Image
                                style={styles.cardImage}
                                source={{ uri: this.props.urlToImage }}
                            />
                            <View style={styles.cardTextView} >

                                {/* 
                                
                                <Text style={styles.cardTextTitle} >
                                </Text> */}
                                <Title style={{textAlign:'left'}}> 
                                    {this.props.title}

                                </Title>
                                <Button transparent>
                                    <Icon {...icons.like} />
                                </Button>
                            </View>

                        </TouchableOpacity>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}


export default CardNews;

