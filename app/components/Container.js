"use strict";

import React from "react";
import {StatusBar, View} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
	container : {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "$primaryBlue"
	}
});

export default ({children}) => (
	<View style={styles.container}>
		<StatusBar translucent={false} barStyle="light-content"/>
		{children}
	</View>
);