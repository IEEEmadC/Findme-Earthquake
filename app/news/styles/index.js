import { StyleSheet } from 'react-native'
import colors from '../../../resources/values/colors';
import dimens from '../../../resources/values/dimens';


const styles = StyleSheet.create({
    
    cardContainer:{
        flex: 1,
        height: dimens.height / 3,
        justifyContent: 'flex-end'
    },
    cardImage:{
        width: '100%',
        height: '100%'
    },
    cardTextView:{
        backgroundColor: '#00000055',
        width: '100%',
        height: '50%',
        position: 'absolute',
        padding: 16
    },
    cardTextTitle:{
        fontSize: dimens.fontSize_title,
        color: colors.WHITE,

    }


})

export default styles;