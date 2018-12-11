import React from 'react';
import { Modal, Text } from 'react-native';
import ProfileEdit from './profileEdit'

function NewsModal(props) {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.modalVisible}
            onRequestClose={props.onRequestClose}
        >
            <ProfileEdit {...props.content}> </ProfileEdit>
        </Modal>
    )
}

export default NewsModal;
