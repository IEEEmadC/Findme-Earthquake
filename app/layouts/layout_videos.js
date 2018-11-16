import React from 'react';
import Videos from '../components/cardvideos'
import { Container, Content, } from 'native-base';

function LayoutNews(props) {
    return (
        <Container>
            <Content>
                {
                    props.videos.map(item => <Videos onPressCard ={props.onPressCardVideo} {...item} />)
                }
            </Content>
        </Container>
    )
}

export default LayoutNews;