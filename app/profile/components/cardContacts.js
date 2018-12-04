import React, { Component } from 'react';
import { CardItem,Card, Text, Left, Body, Right, Icon, Button } from 'native-base';
import Swipeout from 'react-native-swipeout';
import Avatar from '../../components/Avart'


function CardContacs(props){

    return (
        <Swipeout {...props.swipeSettings} >
           
                <CardItem bordered key={props.key}
                    style={{paddingBottom:0}}

                >
                    <Avatar
                    source= {{uri:'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                    />
                    <Body
                        style={{paddingLeft:16}}
                    >
                        <Text>{props.name}</Text>
                        <Text>{props.number}</Text>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon type='Entypo' name="edit" />
                        </Button>
                    </Right>
                </CardItem>
        </Swipeout>
    );
}

export default CardContacs;