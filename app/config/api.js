"use strict";

export const API_URL = 'http://192.168.1.4:8000/api/v1/';
export const API_KEY = 'LKT4390UTKLMNSG908UT4HNGP';

const routes = {
	// app
	'appData'	: 'app',

	// news
	'news.index'			: 'news',
	'news.show'				: 'news/{id}',
	'news.comments.index'	: 'news/{id}/comments',

	// events
	'events.index'			: 'events',
	'events.show'			: 'events/{id}',
};

export default routes;