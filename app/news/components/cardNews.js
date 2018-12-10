import React, { Component } from 'react';
import { Card, CardItem, View, Text, Content } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import News from '../../news/layouts/news_detail';
import styles from '../styles/index';
import Modal from '../components/newsModal';


class CardNews extends Component {

    render() {
        return (
            <Content>
                <Card>
                    <CardItem cardBody >
                        <TouchableOpacity onPress={this.onPressNew}>

                            <Image
                                style={styles.imageNew}
                                source={{ uri: this.props.urlToImage }}
                            />
                            <View style={styles.viewText}>
                            <Text
                                style={styles.textTitle}>
                                {this.props.title}
                            </Text>

                            </View>

                        </TouchableOpacity>
                    </CardItem>
                </Card>
            </Content>

        );
    }
}


export default CardNews;


// constructor(props) {
//     super(props);
//     this.state = {
//         modalVisible: false,
//         new: [],
//         uri: ''
//     };
// }
// setModalVisible(visible) {
//     this.setState({ modalVisible: visible });
// }


// rendermodal() {
//     return (
//         <Modal
//             // modalVisible={this.state.modalVisible}
//             // onClose={this.setModalVisible(false)}
//             // {...this.props}
//         />
//     )
// }
// onPressNew = (event) => {
//     // this.props.onPressCard(this.props)
//     this.setState({
//         new: this.props,
//         uri: this.props.urlToImage,
//         modalVisible: !this.state.modalVisible
//     })
// }