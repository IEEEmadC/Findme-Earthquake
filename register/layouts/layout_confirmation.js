import React from 'react';
import { Container, Text, Item, Content, Input, Button } from 'native-base';
import styles from '../style/index'

function LayoutVerification(props) {
    return (
        <Container>
            <Content>
                <Text style={styles.textBody}>Esperando para detectar automaticamente el SMS </Text>
                <Text style={styles.textBody}>enviado al número  +{props.phoneNumber.substr(0,3)} {props.phoneNumber.substr(4,12)}</Text> 
                
                <Item>
                    <Input
                        placeholder="- - - - - - -"
                        maxLength={6}
                        keyboardType="numeric"
                        onChangeText={props.onChangeCode}
                        secureTextEntry={true}
                        style={styles.textInput}
                    />
                </Item>
                <Text style={styles.textInfo}>Introduce el código de 6 dígitos</Text>
                <Button
                    block
                    onPress={props.onPressButton}
                    style={styles.buttonStyle}
                ><Text> Siguiente </Text></Button>
            </Content>
        </Container>
    );
}
export default LayoutVerification;
