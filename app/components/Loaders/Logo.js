import React from "react";
import * as Progress from "react-native-progress";
import styles from "./styles";
import {Image, View} from "react-native";
import * as Animatable from "react-native-animatable";

const Logo = ( {show} ) =>{
	const logoFile = './images/logo.svg';
	return show ? (
		<View style={styles.circles}>
			<Image
				source={require(logoFile)}
				style={styles.logo}
		/></View> ) : null;
};

const PulsatingLogo = ({show}) => (<Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite"><Logo show={show}/></Animatable.View>);

export {Logo, PulsatingLogo};