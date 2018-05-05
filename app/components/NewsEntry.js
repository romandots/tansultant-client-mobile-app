"use strict";

import React from "react";
import {RkButton, RkCard, RkText} from "react-native-ui-kitten";
import {Image, View, Text} from "react-native";
import {connect} from "react-redux";
import {newsLoad} from "../modules/News/actions";

const NewsEntry = (props) =>{
	const { image, text, tags = ['штбп', 'краснодар'], onPress } = props.data;
	const tagsList = tags.map(tag => <Text key={tag}>#{tag}</Text>);
	return (
		<RkCard>
			<Image rkCardImg source={{uri:image}}/>
			<View rkCardContent onPress={() => props.newsLoad(props.data)}>
				<RkText>{text}</RkText>
			</View>
			<View rkCardFooter>
				{tagsList}
			</View>
		</RkCard>
	);
	};

export default connect( state =>({
	news : state.news
}), dispatch => ({
	newsLoad : (data) => dispatch(newsLoad(data))
}))(NewsEntry);