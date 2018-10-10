import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';

/*

I dont know why these code are not working :(

Coffee.propTypes = {
	name: PropTypes.string.isRequired,
	bean: PropTypes.string.isRequired,
	volume: PropTypes.number,
	info: PropTypes.object
}*/


class Coffee extends Component {
	render() {
		const {name, bean, volume, info} = this.props;

		return(
			<View>
				<Text>Coffee : {name}, {bean} bean, has volume {volume}</Text>
				<Text>info : color({info.color}), taste({info.taste})</Text>
			</View>
		)
	}
}

export default Coffee;