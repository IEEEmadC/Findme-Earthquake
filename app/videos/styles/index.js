import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../resources/values/colors';
import dimens from '../../../resources/values/dimens';
const screen = Dimensions.get('window');
const styles = StyleSheet.create({
    touchablestyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageVideo: {
        width: dimens.fontSize_width*200,
        height: dimens.fontSize_height*100,
        justifyContent: 'center'
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: dimens.fontSize_title,
        color: colors.PRIMARY_TEXT
    },
    textBody: {
        fontWeight: 'normal',
        fontSize: dimens.fontSize_body1,
        color: colors.SECONDARY_TEXT
    },
    textTitleVideo: {
        fontWeight: 'bold',
        fontSize: dimens.fontSize_subhead,
    },
    textChannel: {
        fontWeight: 'normal',
        fontSize: dimens.fontSize_caption,
    },
    textPublished: {
        fontWeight: 'normal',
        fontSize: dimens.fontSize_caption,
    }
})

export default styles;