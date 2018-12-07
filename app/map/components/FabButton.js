import React, { Component } from 'react';
import { Icon, Fab, Button } from 'native-base';
import Item from '../components/item';


export default class FABExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        };
    }

    onPressMainButton = () => this.setState({ active: !this.state.active })

    onPressFood = () => {
        this.props.onPressItem("food")
    }
    onPressSecurity = () => {
        this.props.onPressItem("security")
    }
    onPressStreet = () => {        
        this.props.onPressItem("street")
    }

    render() {
        return (
            <Fab
                active={this.state.active}
                direction="up"
                style={{ backgroundColor: 'rgba(255, 0, 0, 1)' }}
                position="bottomRight"
                onPress={this.onPressMainButton}
            >
                <Icon type="FontAwesome" name="angle-double-up" />
                <Button style={{ backgroundColor: '#34A34F' }} onPress={this.onPressFood}>
                    <Icon
                        type='MaterialCommunityIcons'
                        name='food-variant' />
                </Button>
                <Button  style={{ backgroundColor: '#DD5144' }} onPress={this.onPressStreet}>
                    <Icon
                        type='MaterialCommunityIcons'
                        name='view-parallel' />
                </Button>
                <Button style={{ backgroundColor: '#3B5998' }} onPress={this.onPressSecurity}>
                    <Icon
                        type='MaterialCommunityIcons'
                        name='security-home' />
                </Button>
            </Fab>
        );
    }
}

