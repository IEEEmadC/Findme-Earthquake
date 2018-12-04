import React from "react";
import { Container, Content, Picker, Form, Item,Text, Input,Icon,Button } from "native-base";

function register(props){
    return(
        <Container>
        <Content>
          <Form>
            <Picker
              note
              mode="dropdown"
              selectedValue={props.pickerSelected}
              onValueChange={props.onPickerValueChange}
            >
              <Picker.Item label="Colombia" value="57" />
              <Picker.Item label="Ecuador" value="593" />
              <Picker.Item label="México" value="52" />
              <Picker.Item label="Perú" value="51" />
            </Picker>
          </Form>
          <Item rounded>
            <Icon name='home'/>
            <Text>+{props.countryCode}
            </Text>
            <Input 
              placeholder=''
              onChangeText={props.onChangeNumber} 
            />
          </Item>
          <Button
            onPress = {props.onPressButton}
          >
              <Text>Enviar</Text>
          </Button>
        </Content>
      </Container>
        
    );
}

export default register;