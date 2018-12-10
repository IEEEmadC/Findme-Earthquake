import { Dimensions } from 'react-native'
const screen = Dimensions.get('window');
const ScreenRelation = (screen.height / screen.width);

const dimens = {
    fontSize_textTitle: ScreenRelation* 12,
    fontSize_textBody: ScreenRelation * 5,
    width:screen.width,
    height:screen.height,
}
export default dimens;