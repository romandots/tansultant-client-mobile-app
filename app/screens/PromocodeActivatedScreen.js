"use strict";

import React from "react";
import {View, Text, Button} from "react-native";

export class PromocodeActivatedScreen extends React.Component {
	static navigationOptions = {
		title: 'PromocodeActivated'
	};

	render(){
		return (
			<View style={{
				flex          : 1,
				alignItems    : "center",
				justifyContent: "center"
			}}>
				<Text>PromocodeActivated Screen</Text>
				<Button
					title="Go to Home"
					onPress={() => this.props.navigation.navigate('Home')}
				/>
			</View>
		);
	}
}