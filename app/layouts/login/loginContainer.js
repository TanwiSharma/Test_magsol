import React from 'react';
import BaseComponent from '../baseComponent';
import Login from './login';


class LoginContainer extends BaseComponent {
	
	constructor(props) {
		super(props); 
		
		//Empty array when screen loads
		this.state = {
			
		};		
	}

	componentWillMount() {		
	}

	componentDidMount(){
		
		
	}

	componentDidUpdate(prevProps, prevState){
		
	}

	componentWillUnmount() {
		
	}


	render() {	
		return (
			<Login>
			</Login>
			);
	}
}

export default LoginContainer;