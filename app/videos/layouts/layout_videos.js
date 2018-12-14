import React from 'react';
import Videos from '../components/cardvideos'
import { Container, Content,Header } from 'native-base';


function LayoutNews(props) {
    return (
        <Container>
            {/* <Header
                style={{backgroundColor:'white'}}
            ></Header> */}
            <Content>
                {
                    props.videos.map(item => <Videos
                        {...item} />)
                }
            </Content>
        </Container>
    )
}

export default LayoutNews;