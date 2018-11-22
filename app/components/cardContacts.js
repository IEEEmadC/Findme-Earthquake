import React, { Component } from 'react';
import { Card, CardItem, Text, Left, Right, Icon } from 'native-base';
import { Image, TouchableOpacity, Modal, Alert, StyleSheet, Dimensions, StatusBar } from 'react-native';
import Contacts from '../../resources/data/contacts'
import Swipeout from 'react-native-swipeout';
const { width, height } = Dimensions.get('window');

class CardContacs extends Component {

    render() {
        const swipeSettings = {
            autoClose: true,
            left: [
                {
                    onPress: () => {
                        Alert.alert(
                            'Eliminar Contacto',
                            '¿Está Seguro de Eliminar este contacto?',
                            [
                                {
                                    text: 'Si', onPress: () => {
                                        alert('Se elimino Prr');
                                    }
                                },
                                { text: 'No', onPress: () => console.log('Cancelado'), style: 'cancel' },
                                { cancelable: true }
                            ]
                        )
                    },
                    text: 'Delete'
                }
            ]
        }
        return (
            <Swipeout {...swipeSettings} >
                <CardItem key={this.props.key}>
                    <Left>
                        <Image
                            source={{ uri: this.props.auxUri }}
                            style={styles.imageItem}
                        />

                    </Left>
                    <Text>{this.props.name}{"\n"}{this.props.number}</Text>
                    <Right>
                        <TouchableOpacity>
                            <Icon type='Entypo' name="edit" />
                        </TouchableOpacity>
                    </Right>
                </CardItem>
            </Swipeout>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 500,
        justifyContent: 'center'
    },
    modalContainer: {
        width: width,
        height: height,
        backgroundColor: 'black',
    },
    imageItem: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
});
export default CardContacs;