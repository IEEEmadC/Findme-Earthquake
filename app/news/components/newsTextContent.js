import React, { Component } from 'react';
import {Text, Content } from 'native-base';
import styles from '../styles/index'


function NewsTextContent(props) {
    
    return (
        <Content>
            <Text >{props.title}</Text>
            {
                props.content.map( index => 
                    <Text >{index}</Text>
                )
            }

        </Content>

    )

}
export default NewsTextContent;