"use strict";

import { combineReducers } from 'redux';
import app from './app';
import news from './news';

export default combineReducers({
	app,
	// user : userReducer,
	news
})