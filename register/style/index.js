import { StyleSheet } from 'react-native'
import colors from '../../resources/values/colors';
import dimens from '../../resources/values/dimens';


const styles = StyleSheet.create({
    prueba:{
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: dimens.fontSize_title,
        color: colors.PRIMARY_TEXT
    },
    textBody: {
        paddingTop:20,
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: dimens.fontSize_body1*1.2,
        color: colors.SECONDARY_TEXT
    },
    textInfo:{
        paddingTop:20,
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: dimens.fontSize_subhead*1.2,
        color: colors.SECONDARY_TEXT
    },
    textInput:{
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: dimens.fontSize_title*1.2,
    },
    buttonStyle:{
        margin:20,
        color: 'green'
    }
    

})

export default styles;