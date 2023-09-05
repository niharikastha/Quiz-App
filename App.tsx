
import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet,Text,View} from 'react-native'
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import MyStack from './navigation/index';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const App =()=>{
  return(
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
 container:{
  paddingTop : 40,
  paddingHorizontal: 16,
 }
})
export default App;
