"use strict";

import {
	addNavigationHelpers,
} from 'react-navigation';
import {
	createStore,
	combineReducers, applyMiddleware
} from "redux";
import {
	createReduxBoundAddListener,
	createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import EStyleSheet from "react-native-extended-stylesheet";
import React from 'react';
import AppNavigator from "./config/routes";
import reducers from "./reducers";
import {newsReducer} from "./modules/News"
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import theme from "./config/theme"

const HOME_SCREEN = "News";

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams(HOME_SCREEN));
const navReducer = (state = initialState, action) => {
	const nextState = AppNavigator.router.getStateForAction(action, state);

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};

const appReducer = combineReducers({
	nav: navReducer,
	news: newsReducer,
	...reducers
});

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
	"root",
	state => state.nav,
);
const addListener = createReduxBoundAddListener("root");


EStyleSheet.build(theme);


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


/**
 * Хранилище данных приложения
 * @type {object}
 */
const store = createStore(
	appReducer,
	applyMiddleware(middleware, promise(), thunk, createLogger() )
);
// подписываемся на все события и выводим изменения в лог
store.subscribe(() => {
	console.log('Store changed', store.getState());
});

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