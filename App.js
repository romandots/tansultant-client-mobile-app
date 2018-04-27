"use strict";

import React, {Component} from "react";
import {Provider} from "react-redux";

import store from "./app/store";

import AppContainer from "./app/App";


export default class App extends Component {

	constructor(){
		super();
	}

	render(){
		return (
			<Provider store={store}>
				<AppContainer/>
			</Provider>
		);
	}
};