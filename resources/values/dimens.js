import { Dimensions,PixelRatio } from 'react-native'
const screen = Dimensions.get('window');
const fontScale= PixelRatio.getFontScale();
const ScreenRelation = (screen.height / screen.width);
// https://facebook.github.io/react-native/docs/pixelratio
// https://desarrollador-android.com/material-design/diseno-material-design/estilo/tipografia/#Estilos_estandar
const dimens = {
    fontSize_display1: fontScale* 34,
    fontSize_headline: fontScale* 24,
    fontSize_title: fontScale* 20,
    fontSize_subhead: fontScale* 16,
    fontSize_body1: fontScale* 14,
    fontSize_caption: fontScale* 12,

    width:screen.width,
    height:screen.height,
}
export default dimens;