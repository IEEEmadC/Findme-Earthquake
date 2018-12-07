import React, { Component } from 'react';
import { CardItem,Card, Text, Left, Body, Right, Icon, Button } from 'native-base';
import Swipeout from 'react-native-swipeout';
import Avatar from '../../components/Avart'


function CardContacs(props){

    return (
        <Swipeout {...props.swipeSettings} >

                <CardItem bordered key={props.key}
                    style={{paddingBottom:0}}

                >
                    <Avatar
                    source= {{uri:'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                    />
                    <Body
                        style={{paddingLeft:16}}
                    >
                        <Text>{props.name}</Text>
                        <Text>{props.number}</Text>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon type='Entypo' name="edit" />
                        </Button>
                    </Right>
                </CardItem>
        </Swipeout>
    );
}

export default CardContacs;

// import React, { Component } from 'react';
// import { CardItem, Content, Text, Left, Body, Right, Icon, Button } from 'native-base';
// import { Image, TouchableOpacity, Modal, WebView, StyleSheet, Dimensions, StatusBar } from 'react-native';
// import Swipeout from 'react-native-swipeout';
// import Avatar from '../../components/Avart'


// class CardContacs extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             modalVisible: false,
//             name: '',
//             number: '',
//             uri: ''
//         };
//     }
//     setModalVisible(visible) {
//         this.setState({ modalVisible: visible });
//     }
//     onP = (event) => {
//         this.props.onPressCard(this.props)
//         this.setState({
//             uri: this.props.image,
//             name: this.props.name,
//             number: this.props.number,
//             modalVisible: !this.state.modalVisible
//         })
//     }
//     rendermodal() {
//         return (
//             <Modal
//                 animationType="slide"
//                 transparent={false}
//                 visible={this.state.modalVisible}
//                 onRequestClose={() => {
//                     this.setModalVisible(false);
//                 }}>
//                 <Text>{this.state.name}</Text>
//             </Modal>
//         )
//     }
//     render() {
//         return (
//             <Content>
//                 {this.rendermodal()}
//                 <Swipeout {...props.swipeSettings} >

//                     <CardItem bordered key={props.key}
//                         style={{ paddingBottom: 0 }}

//                     >
//                         <Avatar
//                             source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
//                         />
//                         <Body
//                             style={{ paddingLeft: 16 }}
//                         >
//                             <Text>{props.name}</Text>
//                             <Text>{props.number}</Text>
//                         </Body>
//                         <Right>
//                             <Button transparent onPress={this.onP}>
//                                 <Icon type='Entypo' name="edit" />
//                             </Button>
//                         </Right>
//                     </CardItem>
//                 </Swipeout>
//             </Content>
//         );
//     }
// }

// export default CardContacs;