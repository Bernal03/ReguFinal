import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {Header, Image} from 'react-native-elements';
import {DrawerNavigator1} from '../Navigations/DrawerNavigator1'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header
                leftComponent={{ icon: 'ios-menu-outline', color: '#fff', onPress:()=>navigation.openDrawer() }}
                centerComponent={{ text: 'Covid-19', style: { color: '#fff' } }}
                containerStyle={{backgroundColor: '#006400'}}
            />

            <View style={styles.container2}>
                <Text style={styles.texto}>Bienvenido a mi aplicacion</Text>
                <Image
                    source={require('../Content/covid.jpg')}
                    style={{ width: 200, height: 200 }}
                />
                <Text style={styles.texto}>Aquí podrás encontrar la más reciente información acerca del número de casos de COVID-19. 
                    Estamos usando una API gratis que nos proporciona la información Global y de paises del mundo.</Text>
            </View>
        </View>
    )
}

export default HomeScreen

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
});