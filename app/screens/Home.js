import React, {Component} from "react";
import {connect} from "react-redux";

import Container from "../components/Container";
import {Text, View} from "react-native";
import Logo from "../components/Logo";
import {InputCardNumber} from "../components/Inputs";
import Button from "react-native-elements/src/buttons/Button";

class Home extends Component {

	constructor(props){
		super(props);
		console.log('PROPS:', props);
		this.nav = props.navigation;
	}

	render(){
		return (
			<View style={{
				flex          : 1,
				alignItems    : "center",
				justifyContent: "center"
			}}>
				<Logo/>
				<Text>Home Screen</Text>
				<Button
					title="Go to Login"
					onPress={() => this.nav.navigate('Login')}
				/>
			</View>
		);
	}
}

export default Home;

// export default connect(state => {
// 	app : state.app
// })(Home);