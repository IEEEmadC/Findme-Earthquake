import React, { Component } from 'react';
import { StyleSheet, Dimensions, StatusBar, Alert, Modal } from 'react-native'
import { Container, Content, Button, Icon, Input, Body, Text, View, Item, Card, CardItem } from 'native-base';
import Avatar from '../../app/components/Avart'

import styles from '../style/index'

function layoutInformationUser(props) {
    return (
        <Content>
            <Body
                style={{ padding: 16 }}
            >
                <Avatar
                    big source={{ uri: props.url }}
                />
                <Button
                    iconLeft
                    onPress={props.onPressAddImage}
                    style={{
                        position: 'absolute',
                        marginTop: 110,
                        marginLeft: 110,
                        width: 40,
                        height: 40,
                        paddingTop: 0,
                        paddingBottom: 0,
                        borderRadius: 20

                    }}>
                    <Icon type="Entypo" name="camera"
                        style={{ marginLeft: 10, fontSize: 20 }}
                    />
                </Button>
                <Text>Tu Nombre: </Text>
                <Input
                    placeholder="Ingresa tu nombre aqui"
                    onChangeText={props.onChangeText}
                    style={styles.textInput}

                ></Input>
                <Text style={styles.textBody}> Tú número celular: {props.phoneNumber}</Text>



            </Body>

            <Button block style={styles.buttonStyle}>
                <Text onPress={props.onPressButton}>Iniciar</Text>
            </Button>

        </Content>

    );
}

export default layoutInformationUser;