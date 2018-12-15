import React, { Component } from 'react';
import { View, Text, CheckBox, ListItem, Body } from 'native-base';
import styles from '../styles/index'
import colors from '../../../resources/values/colors';
import dimens from '../../../resources/values/dimens';


class Check extends Component {

    state = {
        checked: false
    };

    render() {
        return (
            <CheckBox
                checked={this.state.checked}
                onPress={() => { this.setState({ checked: !this.state.checked }) }}
            />
        )
    }
}
function NewsCheckList(props) {
    return (
        props.content.map(index => {
            return (
                <ListItem>
                    <Check></Check>
                    <Body>
                        <Text style={{ color: colors.SECONDARY_TEXT, fontSize:dimens.fontSize_body1 }}>
                            {index}
                        </Text>
                    </Body>
                </ListItem>
            )
        })
    )
}



export default NewsCheckList;
