"use strict";

import { combineReducers } from 'redux';
import app from './app';
import {newsReducer} from '../modules/News';

export default combineReducers({
	app,
	// user : userReducer,
	newsReducer
})