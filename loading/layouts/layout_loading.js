import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Text, Thumbnail, Content, Input, Button } from 'native-base';

function LayoutLoading(props) {
    return (
        <Container style={styles.container}>
            <Image
                style={{ width: 150, height: 150 }}
                source={require('../../resources/images/FindMeEarthQuake.png')}
            />
            <Text style={styles.text}>Find Me</Text>
            <Text style={styles.text}>EarthQuake</Text>
        </Container>
    );
}

export default LayoutLoading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006680'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#fff",
        justifyContent: 'center',
        alignItems: 'center',

    }
});