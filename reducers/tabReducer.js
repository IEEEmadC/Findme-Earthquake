import {createNavigationReducer} from 'react-navigation-redux-helpers';
import Navigator from '../register/containers/registerNavigator';
const NavigatorReducer = createNavigationReducer(Navigator);
export default NavigatorReducer; 