import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Platform, View, Alert, TouchableNativeFeedback, Image, SafeAreaView, Button } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {

  return ( 
    //<WelcomeScreen/>
    <ViewImageScreen/>

  );
}