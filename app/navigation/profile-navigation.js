import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Profile from '../profile/containers/container_profile';
const profile = createStackNavigator(
    {
        Profile: {
            screen: Profile,
        }
    }
)
export default profile