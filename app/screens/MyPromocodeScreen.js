"use strict";

import React from "react";
import {View, Text, Button} from "react-native";

export class MyPromocodeScreen extends React.Component {
	static navigationOptions = {
		title: 'MyPromocode'
	};

	render(){
		return (
			<View style={{flex:1, justifyContent:'space-around',alignItems:'center'}}>
				<Text>Hi there!</Text>
				<Button onPress={() => this.props.fetchData()} title="Fetch data"/>
			</View>
		);
	}
}