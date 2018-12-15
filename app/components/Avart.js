import React, { Component } from "react";
import { Text,Button,Icon } from "native-base";
import { Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Seleccionar Foto',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
class Avatar extends Component {
    onPressButton = () => {
        console.log("Presionaste la imagen");

        ImagePicker.showImagePicker(options, (response) => {

            if (response.didCancel) {
            } else if (response.error) {
            } else {
                const source = response.uri;
                this.setState({
                    avatarSource: source,
                });
            }
        });
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Image
                    style={[
                        this.props.small ? styles.small : styles.small,
                        this.props.big && styles.big,
                        this.props.medium && styles.medium]}
                    source={this.props.source}
                />
                <Text>{this.props.name}</Text>
                {this.props.big && <Button
                    style={{
                        position: 'absolute',
                        marginTop: 100,
                        marginLeft: 100,
                        width: 52,
                        height: 52,
                        paddingTop: 0,
                        paddingBottom: 0,
                        borderRadius: 26

                    }}
                    onPress={this.onPressButton}>
                    <Icon type="Entypo" name="camera"
                        style={{ fontSize: 20 }}
                    />
                </Button>}
            </TouchableOpacity >
        );
    }
}
const screen = Dimensions.get('window');
const styles = StyleSheet.create({
    big: {
        width: 160,
        height: 160,
        borderRadius: 80
    },
    medium: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    small: {
        width: 40,
        height: 40,
        borderRadius: 20
    },

});

export default Avatar;