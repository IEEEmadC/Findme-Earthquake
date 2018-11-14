import React from "react";
import {
    Text,
    Content,
    Thumbnail
  } from "native-base";

function Avatar (props){
    return(
        <Content>
            <Thumbnail large source={{uri: props.uri}} />  
            <Text>{props.name}</Text>
        </Content>
    );
}
export default Avatar;