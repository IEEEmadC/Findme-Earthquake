import { StyleSheet } from 'react-native'
import colors from '../../../resources/values/colors';
import dimens from '../../../resources/values/dimens'

const styles = StyleSheet.create({

    header: {
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        padding: 10
    },
    text :{
        color: colors.PRIMARY_TEXT,
        fontSize: dimens.fontSize_textBody
    }

})

export default styles;