import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native-paper';

class Loading extends React.Component {
    
    static propTypes = {
        displayColor: PropTypes.string.isRequired
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size = 'large' color={this.props.displayColor}/>
                <Text style={{color: this.props.displayColor}}>Chargement en cours...</Text>
            </View>
        );
    }
}

export default Loading;