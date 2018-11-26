import React from 'react';
import Videos from '../components/cardvideos'
import { Container, Content,Header } from 'native-base';
let id=0
function LayoutNews(props) {
    return (
        <Container>
            <Header
                style={{backgroundColor:'white'}}
            ></Header>
            <Content>
                {
                    props.videos.map(item => <Videos key={id++} onPressCard ={props.onPressCardVideo} {...item} />)
                }
            </Content>
        </Container>
    )
}

export default LayoutNews;