"use strict";

import React, {Component} from "react";
import {Router, Stack, Scene} from "react-native-router-flux";

import {connect} from "react-redux";

import HomeScreen from "./screens/HomeScreen";
import NewsScreen from "./screens/NewsScreen";

import {fetchAppData} from "./actions/appActions";
import {RkText} from "react-native-ui-kitten";

const TabIcon = ( selected, title ) => ( <RkText style={{color: selected ? "red" : "black"}}/> );

class App extends Component {

	componentDidMount(){
		this.props.fetchAppData();
	}

	render(){
		return (
			<Router>
				<Stack key="root">
				<Scene key="root">
					<Scene key="navigation" tabs>
						<Scene key="home"
							   title="Домой"
							   icon={TabIcon}
							   component={HomeScreen}
						/>
					</Scene>
				</Scene>
				</Stack>
			</Router>
		);
	}
}

export default connect(
	state => ( {
		app: state.app
	} ),
	dispatch => ( {
		fetchAppData: () => dispatch(fetchAppData())
	} )
)(App);