import React, { Component} from 'react';
import {
	Alert,
	NetInfo,
	AsyncStorage
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {colors, globalStyle as gs} from '../config/styles';
import Toast from 'react-native-simple-toast';

const headerConfig = {
	headerTintColor: 'black',
	headerStyle: {
		backgroundColor: 'red',
	},
	headerMode: 'screen'
}

let getTitleFromRouteName = {
	About: 'About Effingut',
	WOT: 'Whats on Tap',
	Menu: 'Menu',
	Feedback: 'Feedback',
	FAQ: 'FAQ',
	MyAccount: 'My Account',
	Location: 'Select Brew Pub'
}


export default class BaseComponent extends Component {
	static navigationOptions = ({ navigation }) => {
		const {state, setParams, navigate} = navigation;
		
		let showMenuIcon = true;
		if(['Location'].indexOf(state.routeName) > -1){
			showMenuIcon = false;
		}		
		return {
			headerLeft: ( showMenuIcon ?
				null
				:
				null
				),
			title: getTitleFromRouteName[state.routeName],
			...headerConfig
		};
	};

	constructor(props){
		super(props);		
	}

	componentWillMount() {
	}

	componentDidMount() {
		NetInfo.isConnected.addEventListener(
			'change',
			this._handleConnectivityChange
			);
	}

	componentWillUnmount() {
		NetInfo.isConnected.removeEventListener(
			'change',
			this._handleConnectivityChange
			);
	}

	_handleConnectivityChange = (isConnected) => {

	};

	render() {
		return;
	}

	showMessage(msg){
		var title = 'Tribalist';
		if(msg.title && msg.title.length > 0){
			title = msg.title;
		}
		var message = 'Some error occured';
		if(msg.message && msg.message.length > 0){
			message = msg.message;
		}
		switch(msg.type){
			case 'TOAST':			
			if(msg.duration && msg.duration == 'LONG'){
				Toast.show(message, Toast.LONG);
			} else{
				Toast.show(message);
			}
			break;
			default: 
			Alert.alert(title, message);
			break;
		}
	}

	checkNetworkAndMakeRq(callback){
		let that = this;
		NetInfo.isConnected.fetch().then(isConnected => {				
			if(isConnected){
				callback();
			}else{
				that.showMessage({type: 'TOAST', message: 'Please check network connection'});
			}
		});
	}

	navigateUserAsPerConditions(user){
		if(user){

			//Check if we need to verify the email again then take to appropriate page
			if(user.verifyEmailAgain){
				return;
			}

			//Check if the user is a corporate user and email is not verified
			if(user.membershipType == 'corporate' && !user.isEmailVerified){
				let screenIndex = 0;
				if(user.isEmailOtpSent){
					screenIndex = 1;
				}				
				const navigateAction = NavigationActions.reset({
						index: screenIndex,						
						actions: [
							NavigationActions.navigate({routeName: 'UpdateEmailOtp',params: {user: user}}),
							NavigationActions.navigate({routeName: 'VerifyEmailCode',params: {user: user}}),
						]
				});
				this.props.navigation.dispatch(navigateAction);	
				return;
			}

			//Check if mobile verifed according navigate to that screen			
			if(user.mobile == null || user.mobile.length == 0 || !user.isNoVerified){
				const navigateAction = NavigationActions.reset({
						index: 0,						
						actions: [
							NavigationActions.navigate({
								routeName: 'VerifyMobile',
								params: {
									user: user
								}
							})
						]
				});
				this.props.navigation.dispatch(navigateAction);	
				return;	
			}
			
			//Navigate be default to Location page
			const navigateAction = NavigationActions.reset({
					index: 0,						
					actions: [
						NavigationActions.navigate({
							routeName: 'Location',
							params: {
							}
						})
					]
			});
			this.props.navigation.dispatch(navigateAction);	
		}		
	}
}