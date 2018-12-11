import React, { Component } from 'react';
import { View, Text, Icon, ListItem, Body, Content, List, Left, Button, Right } from 'native-base';
import styles from '../styles/index'
import colors from '../../../resources/values/colors';
import dimens from '../../../resources/values/dimens';


class ChekItem extends Component {

    state = {
        checked: false
    };

    render() {
        return (
            <Button bordered style={{ height: 25, width: 25, paddingTop: 0, paddingBottom: 0 }}
                onPress={
                    () => {
                        this.setState({ checked: !this.state.checked })
                    }
                }
            >
                <Icon style={{ fontSize: 15, marginLeft: 5, marginRight: 5, color: this.state.checked ?  colors.PRIMARY_TEXT :  colors.SECONDARY_TEXT }} type='Entypo' name="check" />
            </Button>
        )
    }

}

class NewsListItem extends Component {


    render() {
        return (
            <Content>
                <Text style={{ color: colors.PRIMARY_TEXT }}>{this.props.title}</Text>
                <List>
                    {
                        this.props.content.map(index => {
                            return (
                                <ListItem >
                                    <Body style={{ flexDirection: 'row', alignItems: 'stretch' }}>
                                        <ChekItem></ChekItem>
                                        <Text
                                            style={{ color: colors.SECONDARY_TEXT, fontSize: dimens.fontSize_body1 }}
                                        >{index}</Text>
                                    </Body>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Content>
        )
    }
}

export default NewsListItem;
