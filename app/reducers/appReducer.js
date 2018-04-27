"use strict";

// import createReducer from '../lib/createReducer';
import {FETCH_APP_DATA, FETCH_APP_DATA_REJECTED, FETCH_APP_DATA_FULFILLED, FETCH_APP_DATA_PENDING} from "../actions/types";

/**
 * Default initial state
 * @type {{fetching: boolean, fetched: boolean, error: null, message: null, app: {version: string, name: string}}}
 */
const initialState = {
	fetching: false,
	fetched : false,
	error   : null,
	message : null,
	version: "0.0",
	api_version: "0.0",
};

export default function reducer( state = initialState, action ){
	switch(action.type){
		// case FETCH_APP_DATA:
		// 	return {
		// 		...state,
		// 	};
		case FETCH_APP_DATA_PENDING:
			return {
				...state,
				fetching: true,
				fetched : false
			};
		case FETCH_APP_DATA_FULFILLED:
			return {
				...state,
				version     : action.payload.data.app_version,
				api_version     : action.payload.data.api_version,
				error: '',
				fetching: false,
				fetched : true
			};
		case FETCH_APP_DATA_REJECTED:
			return {
				...state,
				error   : 'Не удалось установить связь с сервером. Проверьте соединение с интернетом.',
				fetching: false,
				fetched : false
			};
		default:
			return state;
	}
};