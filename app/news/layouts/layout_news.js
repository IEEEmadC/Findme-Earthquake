import React from 'react';
import News from '../components/cardNews'
import { Container, Header, Content } from 'native-base';


function LayoutNews(props) {

    return (
        <Container>
            {/* <Header
                style={{ backgroundColor: 'white' }}
            ></Header> */}
            <Content>
                {
                    props.news.map(item => <News {...item}/>)
                }
            </Content>
        </Container>
    );
}

export default LayoutNews;