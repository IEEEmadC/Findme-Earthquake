import React from 'react';
import { Container, Button, Content, Text, View, Icon } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native'
const screen = Dimensions.get('window')
let id = 0;
function LayoutAlert(props) {

    return (
        <Container style={styles.viewTitle}>
            <Icon type="FontAwesome" name="warning" style={{ fontSize: 100 }} />
            <View>
                <Text style={styles.textTitle}>¡Alerta de Sismo!</Text>
            </View>
            <View style={{ alignContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textSubtitle}>¿Estas bien?</Text>
                <Text style={styles.textSubtitle}>¡Reportalo!</Text>

            </View>
            <View style={{ alignContent: 'center' }}>
                <Button iconLeft bordered dark
                    onPress={props.onPressContacts}>
                    <Icon type="Ionicons" name="ios-contact" />
                    <Text>Contactos</Text>
                </Button>
            </View>
            <View style={{ alignContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textSubtitle}>¿Existe una emergencia?</Text>
                <Text style={styles.textSubtitle}>Llama al 911</Text>
            </View>
            <View style={{ alignContent: 'center' }}>
                <Button iconLeft bordered dark
                    onPress={props.onPress911}>
                    <Icon type="FontAwesome" name="slack" />
                    <Text>Emergencia</Text>
                </Button>
            </View>

        </Container>
    );
}


const styles = StyleSheet.create({
    viewTitle: {
        backgroundColor: '#F44336',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    contentTitle: { alignContent: 'center' },
    textTitle: {
        fontWeight: 'bold',
        fontSize: (screen.height / screen.width) * 30,
        color: 'black'
    },
    textSubtitle: {
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: (screen.height / screen.width) * 15,
        color: 'black'
    },
});

export default LayoutAlert;