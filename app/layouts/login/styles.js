import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors, generalStyle } from '../../config/styles';


const window = Dimensions.get('window');

export default StyleSheet.create({

	loginBackground:{
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: colors.blue,
		flex: 1,
		justifyContent: 'center',
	},
	contentStyle:{
		
	}
	logo:{

		justifyContent: 'center',

	}
	
	
});