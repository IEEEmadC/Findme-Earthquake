import React from "react";
import {Button,Text,ListItem,Left,Icon} from "native-base";
import styles from '../styles/index';
function ListItemButton(props) {
  return (
    <ListItem >
      <Left>
        <Button transparent onPress={props.onPress}>
          <Icon {...props.icon} />
          {props.children}
          <Text style={styles.text}>{props.description}</Text>
        </Button>
      </Left>
    </ListItem>
  );

}
export default ListItemButton;