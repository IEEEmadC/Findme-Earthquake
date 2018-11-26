import React, { Component } from 'react';
import { Icon, Fab, Button } from 'native-base';

export default class FABExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        };
    }
    onPressButton = (button) => {
        this.setState({
            active: !this.state.active
        })
    }
    render() {
        return (
            <Fab active={this.state.active} direction="up" style={{ backgroundColor: 'rgba(255, 0, 0, 1)' }}
                position="bottomRight" onPress={() => this.setState({ active: !this.state.active })}
            >
                <Icon type="FontAwesome" name="angle-double-up" />
                {
                    this.props.items.map(item =>
                        <Button
                            onPress={this.props.onPress}
                        >
                            <Icon
                                type={item.icon.family}
                                name={item.icon.name}
                            />
                        </Button>
                    )
                }
            </Fab>
        );
    }
}

