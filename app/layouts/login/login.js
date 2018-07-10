import React from 'react';
import { Text, View, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import images from '../../config/images';


const Login = (props) => {	
	
	return (
		<View style={styles.loginBackground}>

			<View style={styles.contentStyle}>

				<View style={styles.logo}>
					<Image source={images.logo}></Image>
				</View>
			</View>

						
		</View>

		
	);
};


Login.propTypes = {	
};

export default Login;