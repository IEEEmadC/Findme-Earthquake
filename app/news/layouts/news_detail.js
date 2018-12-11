import React from 'react';
import { Container, Text, Header, Content, Button, Icon, Left, Body, Title, Right, } from 'native-base';
import { Image } from 'react-native'
import NewsListItem from '../components/newsListItem'
import NewsCheckList from '../components/newsCheckList'
import NewsTextContent from '../components/newsTextContent'
import styles from '../styles/index'

import ReactNativeParallaxHeader from 'react-native-parallax-header';


function LayoutNewsDetail(props) {

    renderContent = () => {
        return (

            <Content padder>
                <Text
                    style={styles.textTitle}> {props.title}
                </Text>
                {
                    props.content.map((item) => {

                        switch (item.type) {
                            // case 'text':
                            //     return (
                            //         <NewsTextContent {...item} />
                            //     )
                            case 'list':
                                return (
                                    <NewsListItem
                                        content={item.content}
                                        title={item.title}>
                                    </NewsListItem>
                                )
                            // case 'checkList':
                            //     return (
                            //         <NewsCheckList
                            //             content={item.content}
                            //             title={item.title}
                            //         />
                            //     )
                        }
                    })
                }
            </Content>
        )
    }

    renderNavBar = () => {
        return (
            <Header  style={{paddingTop:0,height:56,backgroundColor:'red'}} >

                <Left>
                    <Button transparent>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body style={{ flex:2}}>
                    <Title style={{textAlign:'left'}}>{props.title}</Title>
                </Body>
                <Right></Right>
            </Header>
        )
    }

    return (
        <Container>
            <ReactNativeParallaxHeader
                headerMinHeight={56}
                headerMaxHeight={256}
                extraScrollHeight={200}
                navbarColor={'red'}
                backgroundImage={{ uri: props.urlToImage }}
                backgroundImageScale={1.2}
                renderNavBar={this.renderNavBar}
                renderContent={this.renderContent}
            />
        </Container>
    );

}
export default LayoutNewsDetail;