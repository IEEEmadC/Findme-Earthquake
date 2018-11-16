import React, { Component } from 'react';
import { Card, CardItem, Body, Text, Left, Right, Content, Button } from 'native-base';
import { Image } from 'react-native';


// function CardVideo(props) {

class CardVideo extends Component {


    onP = (event) => {
        this.props.onPressCard(this.props)
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Image
                            source={{ uri: this.props.thumbnails.medium.url }}
                            style={{ height: 90, width: 120, flex: 1 }}
                        />
                        <Right>
                            <Content>
                                <Text>{this.props.title} </Text>
                                <Text>{this.props.channelTitle}</Text>
                                <Text>{this.props.publishedAt}</Text>
                            </Content>
                        </Right>
                            <Button onPress={this.onP}>
                                <Text> Aplastame </Text>
                            </Button>
                    </Left>
                </CardItem>
            </Card>
        );
    }
}

export default CardVideo;