import React, {Component} from 'react';
import Contacts from '../components/cardContacts'
import { Container, Content, Button, Icon, Header, Body, Text, Card } from 'native-base';
import { StyleSheet, Dimensions, Alert } from 'react-native'
import Avatar from '../../components/Avart'
const screen = Dimensions.get('window');

let id = 0;

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
                                Alert.alert('Se elimino Prr');
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

class LayoutProfile extends Component {
    render(){
        return (
            <Container >
                <Header
                    style={{backgroundColor:'white'}}
                ></Header>
                <Content 
                >
                    <Body 
                        style={{padding:16}}
                    >
                        <Avatar 
                            big source ={{ uri: this.props.url }} 
                            onPress={this.props.onPressImage}
                        />
                        <Text>Nombre de Usuario </Text>
                        <Button
                            iconLeft
                            style={{
                                position: 'absolute',
                                marginTop: 110,
                                marginLeft: 110,
                                width: 40,
                                height: 40,
                                paddingTop: 0,
                                paddingBottom:0,
                                borderRadius:20
                            
                            }} 
                            onPress={this.props.onPressButton}>
                            <Icon  type="Entypo" name="camera"
                                style={{marginLeft:10,fontSize: 20}}
                            />
                        </Button>
                        <Text 
                            style={{marginTop:40}}
                        >Estos son los usuarios que se les notificara tu estado en caso de desastre</Text>
                    </Body>
                       <Card
                        style={{justifyContent:'center'}}
                       >
    
                            {
                                this.props.contacts.map(item =>
                                    <Contacts swipeSettings={swipeSettings}
                                    key={id++} onPressCard={this.props.onPressCardProfile} {...item} />)
                            }
                       </Card>
                        
                </Content>
            </Container>
        )
    }
}


export default LayoutProfile;