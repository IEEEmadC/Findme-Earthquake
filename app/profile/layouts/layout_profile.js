import React, { Component } from 'react';
import Contacts from '../components/cardContacts'
import { Container, Content, Button, Icon, Header, Body, Text, Card, CardItem } from 'native-base';
import { StyleSheet, Dimensions, Alert } from 'react-native'
import Avatar from '../../components/Avart'
const screen = Dimensions.get('window');

class LayoutProfile extends Component {
    render() {
        return (
            <Container >
                {/* <Header
                    style={{ backgroundColor: 'white' }}
                ></Header> */}
                <Content
                >
                    <Body
                        style={{ padding: 16 }}
                    >
                        <Avatar
                            big source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                            onPress={this.props.onPressImage}
                        >

                            <Button
                                style={{
                                    position: 'absolute',
                                    marginTop: 100,
                                    marginLeft: 100,
                                    width: 52,
                                    height: 52,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    borderRadius: 26

                                }}
                                onPress={this.props.onPressButton}>
                                <Icon type="Entypo" name="camera"
                                    style={{fontSize: 20 }}
                                />
                            </Button>
                        </Avatar>
                        <Text>Nombre de Usuario </Text>
                        <Text
                            style={{ marginTop: 40 }}
                        >Estos son los usuarios que se les notificara tu estado en caso de desastre</Text>
                    </Body>
                    <Card
                        style={{ justifyContent: 'center' }}
                    >

                        {
                            this.props.contacts.map((item, index) =>
                                <Contacts 
                                    key={index} onPressCard={this.props.onPressCardProfile}
                                    {...item}
                                    index={index}
                                />
                            )
                        }
                    </Card>
                    {
                        this.props.contacts.length < 3 &&
                        <Button block>
                            <Text> + Agregar Contacto </Text>
                        </Button>
                    }
                </Content>
            </Container>
        )
    }
}


export default LayoutProfile;