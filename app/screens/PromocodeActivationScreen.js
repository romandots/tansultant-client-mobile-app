"use strict";

import React from "react";
import {View, Text, Button} from "react-native";

export class PromocodeActivationScreen extends React.Component {
	static navigationOptions = {
		title: 'PromocodeActivation'
	};

	render(){
		return (
			<View style={{
				flex          : 1,
				alignItems    : "center",
				justifyContent: "center"
			}}>
				<Text>PromocodeActivation Screen</Text>
				<Button
					title="Go to Home"
					onPress={() => this.props.navigation.navigate('Home')}
				/>
			</View>
		);
	}
}