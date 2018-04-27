import _ from "underscore";
import React from "react";
import {View} from "react-native";

const LoadingBar = props => {
	if( !_.isUndefined(props.show) && props.show === true ) {
		return <View style={{flex:1, height: 3, flexDirection: 'column', backgroundColor:'#596dff'}}/>;
	} else {
		return "";
	}
};

export default LoadingBar;