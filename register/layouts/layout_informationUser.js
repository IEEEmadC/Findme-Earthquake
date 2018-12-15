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