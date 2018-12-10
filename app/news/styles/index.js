import { StyleSheet } from 'react-native'
import colors from '../../../resources/values/colors';
import dimens from '../../../resources/values/dimens';


const styles = StyleSheet.create({
    viewTitle:{
        alignContent:'center',
        alignItems:'center'
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: dimens.fontSize_textTitle,
        color: colors.PRIMARY_TEXT
    },
    textBody: {
        fontWeight: 'normal',
        fontSize: (dimens.height / dimens.width) * 9,
        color: colors.SECONDARY_TEXT
    },
    viewCircle: {
        borderRadius: dimens.width / 16,
        width: dimens.width / 8,
        height: dimens.width / 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.LIGHT_PRIMARY_COLOR
    },
    viewCheck: {
        padding:0,
        width: dimens.width / 8,
        height: dimens.width / 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewText : {
        width: dimens.width,
        backgroundColor: colors.ACCENT_COLOR,
        position:'absolute',
        alignContent:'flex-end'
    },
    imageNew: {
        height: dimens.height/3, width: dimens.width, flex: 1
    },
    cardItem:{
        width:dimens.width,
        height: dimens.width,
        alignContent:'center',
        justifyContent:'center',
    }


})

export default styles;