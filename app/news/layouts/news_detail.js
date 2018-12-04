import React from 'react';
import { Container, Text, Header, Content, CheckBox,ListItem, Body } from 'native-base';
import { Image } from 'react-native'
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

                <Text> {props.title}</Text>

                {
                    props.content.map((item) => {

                        switch (item.type) {
                            case 'text':
                                return <Text> {item.content} </Text>

                            case 'list':
                                return (
                                    

                                    item.content.map(index => {
                                        return(
    
                                            <ListItem>
                                                <CheckBox checked={false}/>
                                                <Body>
                                                    <Text> {index} </Text>
                                                </Body>
                                            </ListItem>
                                        ) 
    
                                    })
                                )
                                
                                
                               


                        }

                    })
                }

            </Content>

        </Container>
    );

}

export default LayoutNewsDetail;