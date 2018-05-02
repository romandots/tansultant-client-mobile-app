"use strict";

import {
	StackNavigator,
} from 'react-navigation';

import Home from "../screens/Home";
import {LoginScreen} from "../screens/LoginScreen";
import {ProfileScreen} from "../screens/ProfileScreen";
import NewsScreen from "../screens/NewsScreen";

const ProfileStack = StackNavigator({
	Profile: {
		screen: ProfileScreen,
		navigationOptions: {
			header: () => null,
		}
	},
	Login: {
		screen: LoginScreen
	}
});

const routes = {
	Profile: {
		screen: ProfileStack,
	},
	News: {
		screen: NewsScreen
	}
};

export default StackNavigator(routes, {
	headerMode: "screen"
});