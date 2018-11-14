import React from "react";
import {
  Button,
  Text,
  ListItem,
  Right,
  Left,
  Icon
}
  from "native-base";
function ListItemButton(props) {
  return (
    <ListItem >
      <Left>
        <Button
          transparent
        >
          <Icon
            {...props.iconOptions}
          />
          <Text>{props.description}</Text>
        </Button>
      </Left>
      <Right>
        {props.children}
      </Right>
    </ListItem>
  );

}
export default ListItemButton;