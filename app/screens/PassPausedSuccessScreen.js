"use strict";

import React from "react";
import {View, Text, Button} from "react-native";

export class PassPausedSuccessScreen extends React.Component {
	static navigationOptions = {
		title: 'PassPausedSuccess'
	};

	render(){
		return (
			<View style={{
				flex          : 1,
				alignItems    : "center",
				justifyContent: "center"
			}}>
				<Text>PassPausedSuccess Screen</Text>
				<Button
					title="Go to Home"
					onPress={() => this.props.navigation.navigate('Home')}
				/>
			</View>
		);
	}
}