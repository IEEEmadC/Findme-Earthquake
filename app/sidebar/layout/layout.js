import React from "react";
import { Container, Content} from "native-base";
import { Row, Grid } from 'react-native-easy-grid'
import Avatar from '../../components/Avart'
import ListItemButton from '../components/ListItemButton'
import styles from '../styles';
import icons from '../../../resources/values/icons';

function SideBar(props) {
    return (
        <Container>
            <Grid>
                <Row style={styles.header}>
                    <Avatar medium source={props.logoApp} >
                    </Avatar>
                </Row>
                <Row>
                    <Content>
                        <ListItemButton description= {props.userName} onPress={props.onPress} >
                            <Avatar small source={props.imageUser} />
                        </ListItemButton>
                        
                        <ListItemButton
                            icon={icons.info_outline}
                            description="Acerca de nosotros"
                        />
                    </Content>
                </Row>
            </Grid>
        </Container>
    );
}
export default SideBar;
