import React from 'react';
import {
	Text,
	Alert,
	AsyncStorage,
	View,
	StyleSheet,
	Image,	
	Dimensions, Platform 
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import BaseComponent from './layouts/baseComponent';
import { NavRoutes } from './config/route';
import {colors, globalStyle, generalStyle} from './config/styles';
import images from './config/images';


class App extends BaseComponent {
	constructor(props){
		super(props);
		
		this.state = {
					
		};
	}


	componentWillMount() {
		super.componentWillMount();

	}

	componentDidMount() {
		super.componentDidMount();	
		const navigateAction = NavigationActions.reset({
				index: 0,
				
				actions: [NavigationActions.navigate({ routeName: 'Login', params: {}, })]
			});
			this.props.navigation.dispatch(navigateAction);
	}

	componentDidUpdate(){		
	}

	componentWillUnmount() {
		super.componentWillUnmount();
	}

	

	render() {		
		
		
		return (
			<Text> Hello App </Text>
		);		

	}
}




// const styles = StyleSheet.create({
	
// });


const RootNavigator = StackNavigator({
	Index: {
		screen: App,
		navigationOptions: {
			header: null,
		}
	},
	...NavRoutes
},
{
	headerMode: 'screen',
	navigationOptions: {
		header: null
	},
	// initialRouteName: 'Login'
});

export default RootNavigator;
