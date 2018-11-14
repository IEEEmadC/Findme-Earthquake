import React from "react";
import {
  Container,
  Content,
  Thumbnail
} from "native-base";
import {Col, Row, Grid} from 'react-native-easy-grid'
import Avatar from '../components/Avart'
import ListItemButton from '../components/ListItemButton'
function SideBar(props){
    return(
        <Container>
        <Grid>
            <Row style={{backgroundColor:'red', height:100 }}>
                <Thumbnail large source={{uri: "https://cdn4.iconfinder.com/data/icons/43-social-media-line-icons/24/github-512.png"}} />  
            </Row>
            <Row>
                <Content>
                <Avatar {...props}/>
                    <ListItemButton 
                        iconOptions={{ type: 'Entypo', name:'facebook-with-circle' }}
                        description="Sincronizar con Facebook"
                    >
                    </ListItemButton>  
                    <ListItemButton
                        iconOptions={{type: 'MaterialIcons', name: 'developer-mode'}}
                        description="About US"
                    />
                    <ListItemButton
                        iconOptions={{type: 'Entypo', name: 'help-with-circle'}}
                        description="Help"
                    />
                    
                </Content>
            </Row>
        </Grid>
      </Container>
     );
}
export default SideBar ;
