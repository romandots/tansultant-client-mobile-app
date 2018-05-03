"use strict";

import Api from '/lib/Api';
import store from '/store';
import {NEWS_FETCH, NEWS_LOAD_ENTRY, NEWS_PICK_ENTRY} from "./types";

/**
 * Fetch list of news from server
 * @returns {{type: string, payload: promise}}
 */
export function newsFetch(){
	console.log('fetchNews');
	return {
		type: NEWS_FETCH,
		payload : Api.fetch('news')
	};
}

/**
 * Pick one news entry
 * from collection by it's index
 * @param {int} index
 * @returns {{type: string, payload: *}}
 */
export function newsPick(index){
	console.log(`openNewsEntry(${index})`, this);
	// let state = store.getState();
	// console.log(`state`, state);
	return {
		type: NEWS_PICK_ENTRY,
		payload : index
	};
}

/**
 * Load picked entry
 * @returns {{type: string, payload: *}}
 */
export function newsLoadPicked(){
	let state = store.getState();
	console.log(`loadNewsEntry(${state.news.pickedItem})`);
	// console.log(`state`, state);
	return {
		type: NEWS_LOAD_ENTRY,
		payload : state.news.collection[state.news.pickedItem]
	};
}
