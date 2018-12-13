import React,{Component} from 'react'
import Layout from '../layout/layout';

class Container extends Component{

    openProfile = () =>{
        
        
        console.log(
            "Hacer navegacion"
        );
        
    } 

    render(){
        console.log(this.props)
        return(
            <Layout
                logoApp = {require('../../../resources/images/FindMeEarthQuake.png')}
                imageUser = {require('../../../resources/images/icusuario_96.png')}
                onPress ={this.openProfile}
            />
        )
    }

}

export default Container;