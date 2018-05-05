import React from "react";
import * as Progress from "react-native-progress"
import styles from "./styles";
import {View} from "react-native";

const Bar = ( {show}) => {
		return show ? (<View style={styles.container}> <Progress.Bar
			style={styles.progress}
			progress={this.state.progress}
			indeterminate={this.state.indeterminate}
		/></View>) : null;
};

export default Bar;