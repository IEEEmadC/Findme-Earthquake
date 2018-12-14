import React, { Component } from 'react';
import { CardItem, Card, Text, Left, Body, Right, Icon, Button, Content } from 'native-base';
import Swipeout from 'react-native-swipeout';
import Avatar from '../../components/Avart'
import Modal from './profileModal'

class CardContacs extends Component {

    state = {
        modalVisible: false,
    };
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <Content>

                <Modal
                    modalVisible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}
                    content={{ ...this.props }}
                />

                <Swipeout {...this.props.swipeSettings} >

                    <CardItem bordered key={this.props.key}
                        style={{ paddingBottom: 0 }}

                    >
                        <Avatar
                            source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                        />
                        <Body
                            style={{ paddingLeft: 16 }}
                        >
                            <Text>{this.props.name}</Text>
                            <Text>{this.props.phone}</Text>
                        </Body>
                        <Right>
                            <Button transparent onPress={() => {
                                alert("Presionado");
                                this.setModalVisible(true);
                            }}>
                                <Icon type='Entypo' name="edit" />
                            </Button>
                        </Right>
                    </CardItem>
                </Swipeout>
            </Content>
        );
    }

}

export default CardContacs;