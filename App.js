import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import react from 'react';
import Navigator from './Navigator';
import * as Location from "expo-location";
import { Alert } from "react-native";
import Loading from './Loading';


export default class extends React.Component {

    state={
      isLoading: true
    };

    getLocation = async() => {
    
      try {      
        await Location.requestPermissionsAsync();

        const {
          coords:{latitude,longitude}
        } = await Location.getCurrentPositionAsync();
        
        console.log(latitude, longitude);

        this.setState({isLoading:false,latitude:latitude, longitude:longitude});

      } catch (error) {
        Alert.alert("can't find you")
      }
    }

    componentDidMount(){
      console.log("didMount");
      this.getLocation();
    }

    render(){
      const {isLoading, latitude, longitude} = this.state;
      return isLoading ? <Loading/> : <Navigator latitude={latitude} longitude={longitude} />
    }
}


