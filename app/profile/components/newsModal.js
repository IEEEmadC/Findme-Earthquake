import React, { Component } from 'react';
import { Modal, Text } from 'react-native';
import News from '../../news/layouts/news_detail';

function NewsModal(props) {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.modalVisible}
            onRequestClose={props.onRequestClose}
        >
            <News {...props.content} />
        </Modal>
    )
}

export default NewsModal;
