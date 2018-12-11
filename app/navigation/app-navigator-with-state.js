import React,{Component} from 'react'
import {connect } from 'react-redux'
import AppNavigator from '../../register/containers/registerNavigator'
import {createReactNavigationReduxMiddleware,reduxifyNavigator} from 'react-navigation-redux-helpers'
const navigationMiddleware= createReactNavigationReduxMiddleware(
    'root',
    state=>state.tabReducer
)
const ReduxifyApp= reduxifyNavigator(AppNavigator,'root') //AQUI HOME
class AppNavigatorWithState extends ReduxifyApp{

}
function mapStateToProps(state){
    return{
        state: state.tabReducer,
    }
}
export default connect(mapStateToProps) (AppNavigatorWithState);