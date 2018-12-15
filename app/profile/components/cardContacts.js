import React, { Component } from 'react';
import { Alert } from 'react-native'
import { CardItem, Card, Text, Left, Body, Right, Icon, Button, Content } from 'native-base';
import Swipeout from 'react-native-swipeout';
import Avatar from '../../components/Avart'
import Modal from './profileModal'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';


class CardContacs extends Component {

    state = {
        modalVisible: false,
    };
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }



    onPressButton = ()=>{

        // this.props.dispatch({
        //     type: 'SET_SELECT_VIDEO',
        //     payload: {
        //         selectedVideo: this.props,
        //     }
        // })

        console.log('Navega');
        

        this.props.dispatch(
            NavigationActions.navigate({
              routeName: 'ModalContact'
        }))    

    }

    render() {

        const swipeSettings = {
            autoClose: true,
            left: [
                {
                    onPress: () => {


                        Alert.alert(
                            'Eliminar Contacto',
                            '¿Está Seguro de Eliminar este contacto',
                            [
                                {
                                    text: 'Si', onPress: () => {
                                        const contactsAux = this.props.contacts;
                                        contactsAux.splice(this.props.index,1);
                                        console.log(contactsAux);
                                        this.props.dispatch({
                                            type: 'SET_CONTACT',
                                            payload: {
                                                contacts: contactsAux,
                                            }
                                        })
                                        this.props.dispatch(
                                            NavigationActions.navigate({
                                              routeName: 'Home'
                                        }))    
                                        
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
            <Content>

                <Modal
                    modalVisible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}
                    content={{ ...this.props }}
                />

                <Swipeout {...swipeSettings} >

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
                            <Button transparent onPress={this.onPressButton}>
                                <Icon type='Entypo' name="edit" />
                            </Button>
                        </Right>
                    </CardItem>
                </Swipeout>
            </Content>
        );
    }

}
function mapStateToProps(state) {
    return ({
        contacts: state.contacts.contacts
    })
}
export default connect(mapStateToProps)(CardContacs);