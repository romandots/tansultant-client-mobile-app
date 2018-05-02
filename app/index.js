"use strict";

import {
	addNavigationHelpers,
} from 'react-navigation';
import {
	createStore,
	applyMiddleware,
	combineReducers,
} from 'redux';
import {
	createReduxBoundAddListener,
	createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import EStyleSheet from "react-native-extended-stylesheet";
import React from 'react';
import AppNavigator from "./config/routes";
import nav from "./reducers/nav"


const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

const navReducer = (state = initialState, action) => {
	const nextState = AppNavigator.router.getStateForAction(action, state);

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};

const appReducer = combineReducers({
	nav
});

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
	"root",
	state => state.nav,
);
const addListener = createReduxBoundAddListener("root");


EStyleSheet.build({
	$white : "#FFFFFF",
	$primaryBlue : '#4F6D7A',
	$lightGray : '#cde5ee',
});


class App extends React.Component {
	render() {
		return (
			<AppNavigator navigation={addNavigationHelpers({
				dispatch: this.props.dispatch,
				state: this.props.nav,
				addListener,
			})} />
		);
	}
}

const mapStateToProps = (state) => ({
	nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
	appReducer,
	applyMiddleware(middleware),
);

class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}

export default Root;