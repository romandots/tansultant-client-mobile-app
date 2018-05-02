"use strict";

import {
	StackNavigator,
	NavigationActions,
} from 'react-navigation';

import Home from "../screens/Home";
import {LoginScreen} from "../screens/LoginScreen";

const routes = {
	Home: {
		screen: Home,
		navigationOptions: {
			header: () => null,
		}
	},
	Login: {
		screen: LoginScreen
	}
};

export {NavigationActions};
export default StackNavigator(routes);