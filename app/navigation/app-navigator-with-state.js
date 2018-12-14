// import React,{Component} from 'react'


import {connect } from 'react-redux'
import {reduxifyNavigator} from 'react-navigation-redux-helpers'
import AppNavigator from '../../register/containers/registerNavigator'


// const navigationMiddleware= createReactNavigationReduxMiddleware(
//     'root',
//     state=>state.tabReducer
// )

const ReduxifyApp= reduxifyNavigator(AppNavigator,'root') 
class AppNavigatorWithState extends ReduxifyApp{}
function mapStateToProps(state){
    return{
        state: state.tabReducer,
    }
}
export default connect(mapStateToProps) (AppNavigatorWithState);