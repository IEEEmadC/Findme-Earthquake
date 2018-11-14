import React, { Component } from 'react'
import LayoutLoading from '../layouts/layout_loading'
import {StatusBar} from 'react-native'
import firebase from 'react-native-firebase';

export default class LoadingConfirmation extends Component {
    constructor(props) {
        super(props);
        this.unsubscribe = null;
        this.state = {
            user: null,
        };
    }
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyAg-8uXG2MwUhnP1dVaWDNDeGnLaLpeWQ4",
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
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user.toJSON() });
                setTimeout(() => {
                    this.props.navigation.navigate('Home')
                }, 2000)
            } else {
                // User has been signed out, reset the state
                this.setState({
                    user: null,
                });
                setTimeout(() => {
                    this.props.navigation.navigate('Register')
                }, 2000)
            }
        });
    }
    render() {
        return (
            <LayoutLoading />
        )
    }
}