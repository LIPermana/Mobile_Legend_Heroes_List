import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Coffee from './Coffee';

class Glass extends Component {
	render() {
	const info = {
		color: "brown",
		taste: "not good enough"
	};

		return(
			<View>
				<Text>Glass</Text>
	        	<Coffee name="Expresso" bean="Robusta" volume={1} info={info} />
        	</View>
		)
	}
}

export default Glass;