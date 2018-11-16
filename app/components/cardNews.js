import React from 'react';
import { Card, CardItem, Body, Text, Left } from 'native-base';
import { Image } from 'react-native';
function News(props) {

    return (

        <Card>
            <CardItem>
                <Left>
                    <Text>
                        {props.title}
                    </Text>
                </Left>
            </CardItem>
            <CardItem>
                <Image
                    source={{ uri: props.uri }}
                    style={{ height: 200, width: null, flex: 1 }}
                />
            </CardItem>
            <CardItem>
                <Body>
                    <Text>
                        {props.content}
                    </Text>
                </Body>
            </CardItem>
        </Card>

    );
}

export default News;