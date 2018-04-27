"use strict";

// import createReducer from '../lib/createReducer';
import {FETCH_NEWS, FETCH_NEWS_REJECTED, FETCH_NEWS_FULFILLED, FETCH_NEWS_PENDING, OPEN_NEWS_ENTRY_REJECTED, OPEN_NEWS_ENTRY_FULFILLED, OPEN_NEWS_ENTRY_PENDING, OPEN_NEWS_ENTRY} from "../actions/types";

/**
 * Default initial state
 * @type {{fetching: boolean, fetched: boolean, error: null, message: null, news: []}}
 */
const initialState = {
	fetching       : false,
	fetched        : false,
	error          : null,
	message        : null,
	collection     : [],
	pickedItem     : {},
	pickedItemIndex: null
};

export default function reducer( state = initialState, action ){
	switch(action.type){

		// fetch news
		case FETCH_NEWS:
			return {
				...state
			};
		case FETCH_NEWS_PENDING:
			return {
				...state,
				fetching: true,
				fetched : false
			};
		case FETCH_NEWS_FULFILLED:
			return {
				...state,
				collection: action.payload.data,
				error     : "",
				fetching  : false,
				fetched   : true
			};
		case FETCH_NEWS_REJECTED:
			return {
				...state,
				error   : "Не удалось установить связь с сервером. Проверьте соединение с интернетом.",
				fetching: false,
				fetched : false
			};

		// open single news entry
		case OPEN_NEWS_ENTRY:
			return {
				...state,
				pickedItemIndex: action.payload
			};
		case OPEN_NEWS_ENTRY_FULFILLED:
			return {
				...state,
				pickedItem: action.payload.data,
				error     : "",
				fetching  : false,
				fetched   : true
			};
		case OPEN_NEWS_ENTRY_REJECTED:
			return {
				...state,
				pickedItemIndex: null,
				pickedItem: {},
				error   : "Не удалось загрузить новость.",
				fetching: false,
				fetched : false
			};

		default:
			return state;
	}
};