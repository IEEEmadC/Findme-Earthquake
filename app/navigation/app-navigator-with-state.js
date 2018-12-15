// import React,{Component} from 'react'

import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import AppNavigator from '../../register/containers/registerNavigator'

const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root')
class AppNavigatorWithState extends ReduxifyApp {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    }
    onBackPress = () => {
        console.log(this);
        const { dispatch, state } = this.props
        dispatch(
            NavigationActions.back({
                key: null
            })
        )
        return true
    }
    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
    }

}
function mapStateToProps(state) {
    console.log('Hola desde el app navigator');
    
    console.log(state);
    
    return {
        state: state.tabReducer,
    }
}
export default connect(mapStateToProps)(AppNavigatorWithState);