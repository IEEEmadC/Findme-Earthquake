import React from "react";
import { View, Container, Content, Picker, Form, Item, Text, Input, Icon, Button } from "native-base";
import styles from '../style/index'
function register(props) {
  return (
    <Container>
      <Content style={styles.viewContainer}>

        <Text style={styles.textBody}>Enviaremos un SMS para verificar tu numero de teléfono.</Text>
        <Text style={styles.textBody}>Introduce tu código de país y numero de teléfono.</Text>
        <Form >
          <Picker
            note
            mode="dropdown"
            selectedValue={props.pickerSelected}
            onValueChange={props.onPickerValueChange}
            style={{ margin: 20}}
            itemStyle={{ alignItems: 'center' }}
            itemTextStyle={{ color: 'green' }}
          >
            <Picker.Item label="Colombia" value="57" />
            <Picker.Item label="Ecuador" value="593" />
            <Picker.Item label="México" value="52" />
            <Picker.Item label="Perú" value="51" />
          </Picker>
        </Form>
        <Item rounded>
          <Icon name='home' />
          <Text 
            style={styles.textInput}>+{props.countryCode}
          </Text>
          <Input
            placeholder='0987868889'
            maxLength={10}
            keyboardType="numeric"
            onChangeText={props.onChangeNumber}
            style={styles.textInput}
          />
        </Item>
        <Button block
          onPress={props.onPressButton}
          style={styles.buttonStyle}
        >
          <Text>Siguiente</Text>
        </Button>
      </Content>
    </Container>

  );
}

export default register;