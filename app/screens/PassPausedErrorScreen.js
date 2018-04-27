"use strict";

import React from "react";
import {View, Text, Button} from "react-native";

export class PassPausedErrorScreen extends React.Component {
	static navigationOptions = {
		title: 'PassPausedError'
	};

	render(){
		return (
			<View style={{
				flex          : 1,
				alignItems    : "center",
				justifyContent: "center"
			}}>
				<Text>PassPausedError Screen</Text>
				<Button
					title="Go to Home"
					onPress={() => this.props.navigation.navigate('Home')}
				/>
			</View>
		);
	}
}