"use strict";

import _ from "underscore";
import React from "react";
import AlertMessage from "./AlertMessage";

const ErrorMessage = props =>{
	// No error - no show
	if( _.isUndefined(props.message) || _.isEmpty(props.message) ) {
		return "";
	}
	if( _.isObject(props.message) ) {
		if( !_.isEmpty(props.message.message) ) {
			this.message = props.message.message;
		} else {
			console.error("Cannot parse error message from object:", props.message);
		}
	} else if( "string" !== typeof props.message ) {
		console.error("Cannot parse error message from:", props.message);
	} else {
		this.message = props.message;
	}
	return <AlertMessage message={this.message} type="error" style={this.style}/>;
};

export default ErrorMessage;