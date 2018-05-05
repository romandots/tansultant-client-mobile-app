"use strict";

// import createReducer from '../lib/createReducer';
import {NEWS_FETCH, NEWS_FETCH_FULFILLED, NEWS_FETCH_PENDING, NEWS_FETCH_REJECTED, NEWS_LOAD_ENTRY, NEWS_LOAD_ENTRY_REJECTED, NEWS_PICK_ENTRY} from "./types";

/**
 * Default initial state
 * @type {{fetching: boolean, fetched: boolean, error: null, message: null, news: []}}
 */
const initialState = {
	fetching       : false,
	fetched        : false,
	error          : "",
	message        : "",
	collection     : [],
	pickedItem     : {},
	pickedItemIndex: null
};

export default function reducer( state = initialState, action ){
	console.log('Reducing state:', state, action);
	switch(action.type){

		// fetch news
		case NEWS_FETCH:
			return {
				...state
			};
		case NEWS_FETCH_PENDING:
			return {
				...state,
				fetching: true,
				fetched : false
			};
		case NEWS_FETCH_FULFILLED:
			const data = action.payload;
			if( data.error ) {
				return {
					...state,
					error     : data.message,
					fetching  : false,
					fetched   : false
				};
			}
			return {
				...state,
				collection: data,
				error     : "",
				fetching  : false,
				fetched   : true
			};
		case NEWS_FETCH_REJECTED:
			return {
				...state,
				error   : "Не удалось установить связь с сервером. Проверьте соединение с интернетом.",
				fetching: false,
				fetched : false
			};

		// open single news entry
		case NEWS_PICK_ENTRY:
			return {
				...state,
				pickedItemIndex: action.payload
			};
		case NEWS_LOAD_ENTRY:
			return {
				...state,
				pickedItem: action.payload,
				error     : "",
			};
		case NEWS_LOAD_ENTRY_REJECTED:
			return {
				...state,
				pickedItemIndex: null,
				pickedItem: {},
				error   : "Не удалось загрузить новость.",
			};

		default:
			return state;
	}
};