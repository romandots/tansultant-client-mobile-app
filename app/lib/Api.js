"use strict";

import routes, {API_URL, API_KEY} from "../config/api";

let AUTH_TOKEN = () => null;


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
	 * @returns {object} promise
	 */
	static request( route, params = {}, verb = "GET" ){
		let config = {
			method : verb,
			headers: {
				"Accept"                     : "application/json",
				"Access-Control-Allow-Origin": "*",
				"Content-Type"               : "application/json",
				// "Authorization"              : AUTH_TOKEN,
				"X-Api-Key"                  : API_KEY
			}
		};
		if( verb.toUpperCase() !== "GET" ) {
			config["body"] = JSON.stringify(params);
		}
		const url = Api.route(route);
		console.log(`Fetching ${url} with config`, config);
		return fetch(url, config)
			.then(response => response.json())
			.catch(e => console.error("Навернулось получение денных;", e));
		;
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
				if( param in params && params[param] ) {
					let regexp2 = new RegExp(`{${param}}`, "g");
					url = url.replace(regexp2, params[param]);
				}
			}
			console.log(`API route "${route}" is: ${API_URL}${url}`);
			return API_URL + url;
		} else {
			return undefined;
		}
	}

	static fetch( model, params ){
		return Api.get(model+'.index');
	}

	static get( route, params ){
		return Api.request(route, params, "get");
	}

	static post( route, params ){
		return Api.request(route, params, "post");
	}

	static put( route, params ){
		return Api.request(route, params, "put");
	}

	static patch( route, params ){
		return Api.request(route, params, "patch");
	}

	static delete( route, params ){
		return Api.request(route, params, "delete");
	}
}

export default Api;