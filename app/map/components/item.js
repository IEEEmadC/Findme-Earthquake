import React, { Component } from 'react';
import { Icon,  Button } from 'native-base';

class Item extends Component {

    
    onPressItem = () =>{
        console.log(this.props)
    }

    render() {
        console.log(this.props);
        
        return (
            <Button
                onPress={this.onPressItem}
            >
                <Icon
                    type= 'MaterialCommunityIcons'
                    name= 'food-variant'
                />
            </Button>
        )
    }

}

export default Item;