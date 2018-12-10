import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../resources/values/colors';
const screen = Dimensions.get('window');
const styles = StyleSheet.create({
    touchablestyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageVideo: {
        width: 0.9*screen.width,
        height: screen.width/3,
        borderRadius:10,
        justifyContent: 'center'
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: (screen.height / screen.width) * 12,
        color: colors.PRIMARY_TEXT
    },
    textBody: {
        fontWeight: 'normal',
        fontSize: (screen.height / screen.width) * 9,
        color: colors.SECONDARY_TEXT
    }
})

export default styles;