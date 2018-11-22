import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import {
    Image, TouchableHighlight,
    StyleSheet
} from 'react-native'
import ItemsFAB from '../../resources/pins/pinData'
export default class FABExample extends Component {
    constructor(props) {
        super(props)
        arrayItems = []
        this.state = {
            active: false,
            items: arrayItems
        };
    }
    onPressButton = button =>{
        this.setState({ active: !this.state.active })
        console.log(button)
    }
    renderItemsFAB() {
        arrayItems=[]
        aux = [];
        i = 0;
        for (item of ItemsFAB) {
            console.log(ItemsFAB)
            arrayItems.push(
                <TouchableHighlight key={item.key} onPress={this.onPressButton} style={styles.imageContainer}>
                    <Image style={styles.image} source={item.image} />
                </TouchableHighlight>
            )
        }
        return arrayItems;

    }
    render() {
        return (
            <Fab
                active={this.state.active}
                direction="up"
                containerStyle={{}}
                style={{ backgroundColor: 'rgba(255, 0, 0, 1)' }}
                position="bottomRight"
                onPress={() => this.setState({ active: !this.state.active })}>
                <Icon type="FontAwesome" name="angle-double-up" />
                {this.renderItemsFAB()}
            </Fab>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
    },
    imageContainer: {
        height: 35,
        width: 35,
        backgroundColor: 'transparent',
        
    },
    image: {
        height: 30,
        width: 30,
    }
});
