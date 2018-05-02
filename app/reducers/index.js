"use strict";

import { combineReducers } from 'redux';
import nav from './nav';
import app from './app';
import news from './news';

export default combineReducers({
	nav,
	app,
	// user : userReducer,
	news
})