"use strict";

import React, {Component} from "react";
import { View, Text } from 'react-native';

export default class AlertMessage extends Component{
	constructor(props){
		super(props);
		this.type = props.type;
		this.message = props.hasOwnProperty('message') ? props.message : '...';
		this.style = {
			backgroundColor: (props.hasOwnProperty('type') && props.type === 'error') ? 'red' : 'green',
			padding: 10,
			flex: 1
		}
	}

	render(){
		return (
			<View style={this.style}>
				<Text>{this.message}</Text>
			</View>
		);
	}
}