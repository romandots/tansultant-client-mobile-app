"use strict";

import {NavigationActions} from "react-navigation";
import Navigator from "../config/routes";


/**
 * Default initial state
 * @type {{fetching: boolean, fetched: boolean, error: null, message: null, app: {version: string, name: string}}}
 */
const initialState = Navigator.router.getStateForAction(NavigationActions.init());

export default function reducer( state = initialState, action ){
	const nextState = Navigator.router.getStateForAction(action, state);
	return nextState || state;
};