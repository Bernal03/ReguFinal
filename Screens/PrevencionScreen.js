import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Image } from 'react-native-elements';
import {DrawerNavigator1} from '../Navigations/DrawerNavigator1'

const PrevencionScreen = ({navigation}) => {
  return (
        <View style={styles.container}>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress:()=>navigation.openDrawer() }}
                centerComponent={{ text: 'Prevencion', style: { color: '#fff' } }}
                containerStyle={{backgroundColor: '#006400'}}
            />

            <View style={styles.container2}>
                <Text style={styles.texto}>Prevencion</Text>
                <Image style={styles.imagen}
                    source={require('../Content/covid-preventions.jpg')}
                />
            </View>
        </View>
    )
}

export default PrevencionScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
    texto:{
      color: 'black', 
      textAlign: 'center', 
      fontSize: 15,
      margin: 10,
      fontWeight: 'bold',
    },
     imagen:{
      width: 357, 
      height:540,
      margin:10,
      alignSelf:'center'
    },
});

