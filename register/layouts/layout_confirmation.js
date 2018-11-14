import React from 'react';
import { Container, Text, Item, Content, Input, Button } from 'native-base';

function LayoutVerification(props) {
    return (
        <Container>
            <Content>
                <Text>Ingresa el codigo de Verificación que hemos
                        enviado al telefono:  +{props.phoneNumber}
                </Text>
                
                <Item>
                    <Input
                        placeholder="- - - - - - -"
                        onChangeText={props.onChangeCode}
                    />
                </Item>
                <Button
                    light
                    onPress={props.onPressButton}
                ><Text> Verificar </Text></Button>
            </Content>
        </Container>
    );
}
export default LayoutVerification;
