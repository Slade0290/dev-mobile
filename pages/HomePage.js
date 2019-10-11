import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WeatherService from '../services/weather-service';
import { MaterialCommunityIcons } from '@expo/vector-icons' ;
import Loading from '../components/Loading';

class HomePage extends React.Component {
    
    serv = new WeatherService();
    
    state = {
        wea: null
    }

    componentDidMount(){
       this.serv.getWeatherHome().then((resp) => {
           this.setState({wea : resp.data});
        });
    }
    render() {
        return (
            this.wea != null ? (
            <View style={{flex:1}}>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>{this.state.wea.weather.main}</Text>
                </View>
                <View style={{flex :2,  justifyContent: 'center', alignItems: 'center'}}>
                    <Text style= {style.BigWhite}>Température : {this.state.wea.main.temp}</Text>
                    <Text>Température max :{this.state.wea.main.temp_max}</Text>
                    <Text>Température min :{this.state.wea.main.temp_min}</Text> 
                </View>
                <View style={{flex :3, backgroundColor: 'green' }}></View>
            </View>
            ):
            (
                <Loading displayColor = "red"></Loading>
            )
        );
    }
}


//Exemple class css

const style = StyleSheet.create({
    BigWhite:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 50
    }
    });

export default HomePage;