import React from 'react'
import { Image, Modal } from 'react-native'
import { Container } from "native-base";


function ImageModal(props){

    return(
        <Modal
                animationType="slide"
                transparent={false}

                visible={this.state.modalUserVisible}
                onRequestClose={() => {
                    this.setModalVisible(false);
                }}
            >
                <Container
                    style={{
                        width: screen.width,
                        height: screen.height,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'black',
                    }}
                >
                    <Image
                        style={{
                            width: screen.width,
                            height: screen.height / 3,
                            borderRadius: 0
                        }}
                        source={{ uri: this.state.avatarSource }}
                    />
                </Container>
            </Modal>

    )
}

export default ImageModal;