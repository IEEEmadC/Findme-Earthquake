import React,{Component} from 'react';
import { Modal } from 'react-native';
import News from '../../news/layouts/news_detail';

class NewsModal extends Component {

    render(){
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.modalVisible}
                onRequestClose={this.props.onClose}
            >
                {/* <News {...props} /> */}
    
            </Modal>
        )
    }
}

export default NewsModal;
