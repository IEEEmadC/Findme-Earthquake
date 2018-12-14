import React, { Component } from 'react'
import LayoutLoading from '../layouts/layout_loading'
import { StatusBar } from 'react-native'
import firebase from 'react-native-firebase';
import { connect } from 'react-redux'

class LoadingConfirmation extends Component {
    // constructor(props) {
    //     super(props);
    //     this.unsubscribe = null;
    //     // this.state = {
    //     //     user: null,
    //     // };
    // }
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyCLodGVAitkJe56UnHncS2N1omWJJvlb4o",
            appId: '1:668510197057:android:0215ba072bca4a35',
            authDomain: "find-me-earthquake.firebaseapp.com",
            databaseURL: "https://find-me-earthquake.firebaseio.com",
            projectId: "find-me-earthquake",
            storageBucket: "find-me-earthquake.appspot.com",
            messagingSenderId: "668510197057"
        };
        firebase.initializeApp(config);
    }

    componentDidMount() {
        StatusBar.setHidden(true);
        console.log('Validando');
        console.log(this.props.user.name);
        this.props.user.name ?
            setTimeout(() => {
                this.props.navigation.navigate('Home')
            }, 2000) :
            setTimeout(() => {
                this.props.navigation.navigate('Register')
            }, 2)
    }

    componentWillUnmount(){
        StatusBar.setHidden(false);
    }

    render() {
        return (
            <LayoutLoading />
        )
    }
}
function mapStateToProps(state) {
    console.log(state.user.user.name);

    return {
        user: state.user.user
    }
}
export default connect(mapStateToProps)(LoadingConfirmation)