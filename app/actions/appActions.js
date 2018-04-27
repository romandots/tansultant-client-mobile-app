"use strict";

import * as types from "./types";
import Api from '../lib/Api';



export function fetchAppData(){
	console.log('fetchAppData');
	return {
		type: types.FETCH_APP_DATA,
		payload : Api.get('fetch.appData')
	};
}

