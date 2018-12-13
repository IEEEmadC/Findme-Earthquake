import React from "react";
import { Container, Content } from "native-base";
import { Row, Grid } from 'react-native-easy-grid'
import Avatar from '../../components/Avart'
import ListItemButton from '../components/ListItemButton'
import styles from '../styles';
import icons from '../../../resources/values/icons';
import { DrawerItems } from 'react-navigation'

function SideBar(props) {
    console.log('hola desde props');

    console.log(props);

    return (
        <Container>
            {/* <Grid>
                <Row style={styles.header}>
                    <Avatar medium source={require('../../../resources/images/FindMeEarthQuake.png')} >
                    </Avatar>
                </Row>
                <Row>
                    <Content>
                        <ListItemButton description={props.userName} onPress={props.onPress} >
                            <Avatar small source={require('../../../resources/images/icusuario_96.png')} />
                        </ListItemButton>

                        <ListItemButton
                            icon={icons.info_outline}
                            description="Acerca de nosotros"
                        />
                    </Content>
                </Row>
            </Grid> */}
            <DrawerItems {...props} />
        </Container>
    );
}
export default SideBar;
