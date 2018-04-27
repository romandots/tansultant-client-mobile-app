"use strict";

import { combineReducers } from 'redux';
import app from './appReducer';
import news from './newsReducer';

export default combineReducers({
	app,
	// user : userReducer,
	news
})