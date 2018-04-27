"use strict";

import React from "react";
import {ScrollView, Text, View} from "react-native";
import {Container, Content, Header} from "native-base";

import ErrorMessage from "../components/ErrorMessage";
import LoadingBar from "./LoadingBar";

const ScreenTitle = ( props ) =>{
	if( props.title ) {
		return <Text>{props.title}</Text>;
	} else {
		return "";
	}
};
const ScreenLayout = ( props ) => (
	<Container>
		<ScrollView contentContainerStyle={{
			paddingVertical: 20
		}}>
			<LoadingBar show={props.loading}/>
			<Header>
				<ScreenTitle title={props.title}/>
				<ErrorMessage appData={props.error}/>
			</Header>
			<Content>
				{props.children}
			</Content>
		</ScrollView>
	</Container>
);

export default ScreenLayout;