"use strict";

import React from "react";
import {Actions} from "react-native-router-flux";
import {Text, Container, Content, Header, Button} from "native-base";
import ScreenLayout from "../components/ScreenLayout";
import {connect} from "react-redux";

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: "Home"
	};

	render(){
		let app = this.props.app;
		return (
			<ScreenLayout loading={app.fetching}>
				<Container>
					<Header/>
					<Content>
						<Text onPress={() => Actions.news()}>Hi there!</Text>
						<Text onPress={() => Actions.news()}>Version is {app.version}</Text>
						<Text>API Version is {app.api_version}</Text>
					</Content>
				</Container>
			</ScreenLayout>
		);
	}
}


export default connect(
	state => ({
		app : state.app
	}),
	dispatch => ({
	})
)(HomeScreen);