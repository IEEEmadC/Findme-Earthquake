import React, { Component } from 'react';
import { Text, Content } from 'native-base';
import styles from '../styles/index'
import colors from '../../../resources/values/colors';
import dimens from '../../../resources/values/dimens';


function NewsTextContent(props) {

    return (
        <Content padder>
            <Text >{props.title}</Text>
            <Text></Text>
            {
                props.content.map(index =>
                    <Text style={{ color: colors.PRIMARY_TEXT, fontSize: dimens.fontSize_body1 }}>
                        {index}
                    </Text>
                )
            }
        </Content>

    )

}
export default NewsTextContent;