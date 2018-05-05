import React from "react";
import * as Progress from "react-native-progress"
import styles from "./styles";
import {View} from "react-native";

const Icon = ( {show}) => {
		return show ? (<View style={styles.circles}> <Progress.CircleSnail
			style={styles.progress}
			color={[
				'#0083CA',
				'#39B54A',
				'#FFC60B',
				'#E81A4B',
			]}
		/></View>) : null;
};

export default Icon;