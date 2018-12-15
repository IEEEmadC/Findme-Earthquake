import React, { Component } from 'react';
import { View, Text, Icon, ListItem, Body, Content, List, Left, Button, Right, Badge } from 'native-base';
import styles from '../styles/index'
import colors from '../../../resources/values/colors';
import dimens from '../../../resources/values/dimens';


class NewsListItem extends Component {


    render() {
        return (
            <Content >

                <Text style={{ color: colors.PRIMARY_TEXT }}>
                    {this.props.title}
                </Text>
                <List>
                    {
                        this.props.content.map((element, index) => {
                            return (
                                <ListItem >
                                    <Body style={{ flexDirection: 'row' }}>
                                        <Badge>
                                            <Text> {index + 1} </Text>
                                        </Badge>
                                        <Text
                                            style={{ color: colors.SECONDARY_TEXT, fontSize: dimens.fontSize_body1 }}
                                        >{element}</Text>
                                    </Body>
                                </ListItem>
                            )

                        })
                    }
                </List>
                <Text />
            </Content>
        )
    }
}

export default NewsListItem;
