"use strict";

import Axios from "axios";
import routes, {API_URL, API_KEY} from "../config/api";

let AUTH_TOKEN = () => null;

const axiosConfig = {
	baseURL: API_URL,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Content-Type"               : "application/json",
		"Authorization"              : AUTH_TOKEN,
		"X-Api-Key"                  : API_KEY
	}
};

/**
 * Api handler
 */
class Api {

	/**
	 * Return Axios promise set up
	 * for method
	 * @param route
	 * @param params
	 * @param verb
	 * @returns {AxiosPromise}
	 */
	static axios( route, params = {}, verb = "get" ){
		return Axios.create(axiosConfig)({
			method: verb,
			url   : Api.route(route, params),
			data  : params
		});
	}

	/**
	 * Get method full route
	 * @param route
	 * @param params
	 * @returns {string} route
	 */
	static route( route, params = {} ){
		if( route in routes ) {
			let url = routes[route];
			let regexp = /{([^\/]+)}/g;
			let matches;
			while(matches = regexp.exec(url)){
				let param = matches[1];
				if(param in params && params[param]){
					let regexp2 = new RegExp(`{${param}}`, 'g');
					url = url.replace(regexp2, params[param]);
				}
			}
			console.log(`API route "${route}" is: ${route}`);
			return route;
		} else {
			return undefined;
		}
	}

	static get( route, params ){
		return Api.axios(route, params, "get");
	}

	static post( route, params ){
		return Api.axios(route, params, "post");
	}

	static put( route, params ){
		return Api.axios(route, params, "put");
	}

	static patch( route, params ){
		return Api.axios(route, params, "patch");
	}

	static delete( route, params ){
		return Api.axios(route, params, "delete");
	}
}

export default Api;