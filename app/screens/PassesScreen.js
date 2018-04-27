"use strict";

import React from "react";
import {View} from "react-native";
import {Text, Button} from "react-native-elements";

export class PassesScreen extends React.Component {
	static navigationOptions = {
		title: 'Абонементы'
	};

	render(){
		return (
			<View style={{
				flex          : 1,
				alignItems    : "center",
				justifyContent: "center"
			}}>
				<Text>Абонементы</Text>
				<Button
					title="Go to Home"
					onPress={() => this.props.navigation.navigate('Home')}
				/>
			</View>
		);
	}
}