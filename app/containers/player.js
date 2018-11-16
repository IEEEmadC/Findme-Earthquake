import React,{Component} from 'react';
import { WebView } from 'react-native';
import {Container,Button,Text} from 'native-base';

class Player extends Component{
    render(){
        return(
            <Container>
                <WebView
                source={{html:'<iframe width="560" height="315" src="https://www.youtube.com/embed/e3bxMNTzOpk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' 
                }}
                style={{marginTop: 20}}
              />
              <Button onPress={this.onPress}>
                <Text> Presio :)</Text>
              </Button>

            </Container>
        );
    }
}

export default Player;