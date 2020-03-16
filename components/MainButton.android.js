import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity,TouchableNativeFeedback, Platform} from 'react-native';
import colors from '../constants/colors';

const MainButton = props => {
    let ButtonComponent = TouchableOpacity;
    if(Platform.Version >= 21){
        ButtonComponent = TouchableNativeFeedback;
    }



    return (
        <View style={styeles.buttonContainer}>
            <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
                <View style={styeles.button}>
                        <Text style={styeles.buttonText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>    
    )
}

const styeles = StyleSheet.create({
    button :{
        backgroundColor:colors.primary,
        paddingVertical:12,
        paddingHorizontal:30,
        borderRadius:25
    },
    buttonContainer:{
        borderRadius:25,
        overflow:'hidden'
    },
    buttonText:{
        color:'white',
        fontFamily:'open-sans',
        fontSize:18
    }
})

export default MainButton