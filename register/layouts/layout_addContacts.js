import React from 'react';
import { Container, Text, Item, Content, Input, Button } from 'native-base';
import styles from '../style/index'

function LayoutAddContacts(props) {
    return (
        <Container>
            <Content>
                <Text style={styles.textBody}>Escoge a los contactos que notificaremos </Text>
                <Text style={styles.textBody}>tu estado en caso de emergencia</Text>
                <Button
                    block
                    onPress={props.onPress}
                    style={styles.buttonStyle}
                ><Text> Abrir contactos </Text></Button>


                {props.children}
                <Button
                    block
                    onPress={props.onPressNext}
                    style={styles.buttonStyle}
                ><Text> Siguiente </Text></Button>
            </Content>


        </Container>
    );
}
export default LayoutAddContacts;