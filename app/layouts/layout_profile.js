import React from 'react';
import Contacts from '../components/cardContacts'
import { Container, Content, Button, Icon, Card, CardItem, Text } from 'native-base';
import { Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
const screen = Dimensions.get('window');

let id = 0

function LayoutProfile(props) {
    return (
        <Container>
            <Content>
                {props.children}
                <TouchableOpacity onPress={props.onPressImage} style={styles.contacontainer} >
                    <Image
                        source={{ uri: props.url }}
                        style={styles.imageContainer}
                    />
                    <Button onPress={props.onPressButton}>
                        <Icon type="Entypo" name="camera"></Icon>
                    </Button>
                </TouchableOpacity >

                <Card>
                    <CardItem>
                        <Text style={styles.textName}>User Name</Text>
                    </CardItem>
                    <CardItem>
                        <Text style={styles.textInfo}>Estos son los usuarios que se les notificara tu estado en caso de desastre</Text>
                    </CardItem>
                    {
                        props.contacts.map(item => <Contacts key={id++}{...item} />)
                    }
                </Card>
            </Content>
        </Container>
    )
}


export default LayoutProfile;
const styles = StyleSheet.create({
    contacontainer: {
        alignItems:'center',
        justifyContent: 'center'
    },
    imageContainer: {
        width: 160,
        height: 160,
        borderRadius: 80,
        alignItems: 'center',
        alignContent: 'center',
    },
    imageItem: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    textName: {
        fontWeight: 'bold',
        fontSize: (screen.height / screen.width) * 15,
    },
    textInfo: {
        fontWeight: 'normal',
        fontSize: (screen.height / screen.width) * 10,
    }
});