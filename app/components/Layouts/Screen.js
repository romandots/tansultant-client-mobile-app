"use strict";

import React from "react";
import {ScrollView, Text, View} from "react-native";
import {Container, Content, Header} from "native-base";

import * as Loaders from "../../components/Loaders";

const ScreenTitle = ( props ) =>{
	if( props.title ) {
		return <Text>{props.title}</Text>;
	} else {
		return "";
	}
};

const Message = ({message}) => message ? <Text>{message}</Text> : null;
console.log('Message', Message);

const Screen = ( props) =>(
			<Container>
				<ScrollView contentContainerStyle={{
					paddingVertical: 20
				}}>
					<Loaders.Icon show={props.loading}/>
					<Content>
						<Message message={props.message}/>
						{props.children}
					</Content>
				</ScrollView>
			</Container>
		);

export default Screen;