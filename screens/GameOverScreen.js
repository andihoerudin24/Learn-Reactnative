import React from 'react';

import  {View, TextInput, StyleSheet,Text,Button,Image} from 'react-native';

import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../constants/colors';
import MainButton from '../components/MainButton';


const GameOverScreen = props => {

    return(
        <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
            <Image 
            source={require('../assets/original.png')} 
            // source={{uri:
            //     'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'}} 
            style={styles.image}
            resizeMode="cover"
            />
        </View>
        <View style={styles.resulContainer}>
        <BodyText style={styles.resultText}>Your Phone neeeded <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to gues the number: 
                    <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
        </View>
        <MainButton onPress={props.onRestart} > NEW GAME </MainButton>
      </View>
      
    )
}


const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:"100%",
        height:"100%",
        borderRadius:200
    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:200,
        borderWidth:3,
        borderColor:'black',
        overflow:'hidden',
        marginVertical:30,
    },
    resulContainer:{
         marginHorizontal:30 ,
         marginVertical:15     
    },
    highlight:{
        color:colors.primary,
        fontFamily:'open-sans-bold',
        
    },
    resultText:{
        textAlign:'center',
        fontSize:20
    }
})

export default GameOverScreen