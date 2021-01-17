import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator1 from './Navigations/DrawerNavigator1';
import PaisesProvider from './Context/PaisesContext'

export default function App() {
  return (
    <PaisesProvider>
      <NavigationContainer>
        <DrawerNavigator1/>
      </NavigationContainer>
    </PaisesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
