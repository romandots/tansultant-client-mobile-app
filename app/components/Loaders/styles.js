import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingVertical: 20,
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	circles: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	progress: {
		margin: 10,
	},
	logo : {
		width: 51,
		height: 65
	}
});

export default styles;