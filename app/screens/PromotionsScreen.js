"use strict";

import React from "react";
import {View, Text, Button} from "react-native";

export class PromotionsScreen extends React.Component {
	static navigationOptions = {
		title: 'Promotions'
	};

	render(){
		return (
			<View style={{
				flex          : 1,
				alignItems    : "center",
				justifyContent: "center"
			}}>
				<Text>Promotions Screen</Text>
				<Button
					title="Go to Home"
					onPress={() => this.props.navigation.navigate('Home')}
				/>
			</View>
		);
	}
}