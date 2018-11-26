import React from 'react';
import News from '../components/cardNews'

import { Container, Header, Content } from 'native-base';

function LayoutNews(){

    return(
        <Container>
            <Header
                style={{backgroundColor:'white'}}
            ></Header>
            <Content>
                <News
                title="Hola"
                uri= "http://www.carolina.cl/static/2017/05/yque2.jpg"
                content="contenido ........ "
                ></News>
                <News
                title="Hola2"
                uri= "http://www.carolina.cl/static/2017/05/yque2.jpg"
                content="contenido ........ "
                ></News>
                <News
                title="Hola3"
                uri= "http://www.carolina.cl/static/2017/05/yque2.jpg"
                content="contenido ........ "
                ></News>
            </Content>
        </Container>
    );
}

export default LayoutNews;