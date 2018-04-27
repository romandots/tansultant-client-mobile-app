"use strict";

import * as types from "./types";
import Api from '../lib/Api';
import store from '../store';

export function fetchNews(){
	console.log('fetchNews');
	return {
		type: types.FETCH_NEWS,
		payload : Api.get('news.index')
	};
}

export function openNewsEntry(index){
	console.log(`openNewsEntry(${index})`, this);
	// let state = store.getState();
	// console.log(`state`, state);
	return {
		type: types.OPEN_NEWS_ENTRY,
		payload : index
	};
}

export function loadNewsEntry(){
	let state = store.getState();
	console.log(`loadNewsEntry(${state.news.pickedItem})`);
	// console.log(`state`, state);
	return {
		type: types.OPEN_NEWS_ENTRY_FULFILLED,
		payload : state.news.collection[state.news.pickedItem]
	};
}

export function fetchNewsComments(newsId){
	console.log(`fetchNewsComments(${newsId})`);
	return {
		type: types.FETCH_NEWS_COMMENTS,
		payload : []
			// Api.get('fetch.news.comments', {id:newsId} )
	};
}

