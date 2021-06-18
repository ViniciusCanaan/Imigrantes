import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import firebase from './src/services/firebaseConnection';
import AuthProvider from './src/contexts/auth';

console.disableYellowBox=true;

import Routes from './src/routes';


export default function Imigrantes() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#fff" barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}