import React from 'react';
import { Container, Text, Header, Content, } from 'native-base';
import { Image, StyleSheet, Dimensions } from 'react-native'
import NewsListItem from '../components/newsListItem'
import NewsCheckList from '../components/newsCheckList'
import NewsTextContent from '../components/newsTextContent'

const screen = Dimensions.get('window');

let key = 1;
function LayoutNewsDetail(props) {

    return (
        <Container>
            <Header></Header>

            <Image
                style={{
                    height: 100,
                    width: 100,
                }}
                source={{ uri: props.urlToImage }}
            />

            <Content>

                <Text
                    style={styles.textTitle}> {props.title}
                </Text>

                {
                    props.content.map((item) => {
                        
                        switch (item.type) {
                            case 'text':
                                return (
                                    <NewsTextContent {...item} />
                                )
                            case 'list':
                                return (
                                    <NewsListItem
                                        content={item.content}
                                        title={item.title}>
                                    </NewsListItem>
                                )
                            case 'checkList':
                                return (
                                    <NewsCheckList
                                        content={item.content}
                                        title={item.title}
                                    />
                                )
                        }

                    })
                }

            </Content>

        </Container>
    );

}
const styles = StyleSheet.create({

    textTitle: {
        fontWeight: 'bold',
        fontSize: (screen.height / screen.width) * 12,
        color: 'black'
    },
});
export default LayoutNewsDetail;