import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';


 export default function Loading(){
    return (
        <View style={styels.container}>
            <Text style={styels.text}>!!Getting my Navigator!!</Text>
        </View>
    );
}

const styels = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text:{
        color: "#2c2c2c",
        fontSize: 30
    }
});
