import React from 'react';
import {Image,StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Title from '../components/title';

const Home =({navigation})=>{
    return(
        <View style={styles.container}>
            <Title titleText='Quizzler'/>
            <View style={styles.bannerContainer}>
                <Image source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png',
        }}
                style = {styles.banner}
                resizeMode="contain"
                />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
                <Text style={styles.buttonText}>
                    Start
                </Text>
            </TouchableOpacity>
        </View>)
}

const styles = StyleSheet.create({
    banner:{
        height :300,
        width :300,
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex : 1,
    },
    container:{
        paddingTop: 40,
        paddingHorizontal:20,
        height : '100%'
    },
    button :{
        width : '100%',
        backgroundColor:"#5E548E",
        padding : 20,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText:{
        fontSize: 24,
        fontWeight: '600',
        color:'white',
    }
});

export default Home