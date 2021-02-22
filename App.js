import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import react from 'react';
import Navigator from './Navigator';
import * as Location from "expo-location";
import { Alert } from "react-native";


export default class extends React.Component {



    getLocation = async() => {
    
      try {
        
        await Location.getPermissionsAsync();

        const {
          coords:{latitude,longitude}
        } = await Location.getCurrentPositionAsync();
        
        console.log(latitude, longitude);

        this.setState(latitude, longitude);

      } catch (error) {
        Alert.alert("can't find you")
      }
    }

    componentDidMount(){
      this.getLocation();
    }

    shouldComponentUpdate(){
      this.getLocation();
    }

    render(){
      const { latitude, longitude} = this.state;
      console.log(latitude, longitude);
      return <Navigator latitude={latitude} longitude={longitude} />
    }
}


