"use strict";

import React from "react";
import {RkButton, RkCard, RkText} from "react-native-ui-kitten";
import {Image, View} from "react-native";
import {Button, Text} from "native-base";

const NewsEntry = props => (
	<RkCard>
		<Image rkCardImg source={{uri:props.data.image}}/>
		<View rkCardContent>
			<RkText>{props.data.text}</RkText>
		</View>
		<View rkCardFooter>
			<Button rounded light>
				<Text>Комментировать</Text>
			</Button>
		</View>
	</RkCard>
);

export default NewsEntry;