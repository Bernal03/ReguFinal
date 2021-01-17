import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListItem, Header, Image} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PaisesContext} from '../Context/PaisesContext';



const GlobalScreen = ({navigation}) => {

    const {resultado} = useContext(PaisesContext);
    


    return (
    
    <View style={styles.container}>
        <Header
                leftComponent={{ icon: 'ios-menu-outline', color: '#fff', onPress:()=>navigation.openDrawer() }}
                centerComponent={{ text: 'Covid-19', style: { color: '#fff' } }}
                containerStyle={{backgroundColor: '#006400'}}
            />
        <View>
                        <Image
                            source={require('../Content/Global.jpg')}
                            style={{ width: 200, height: 200 }}
                        />
                        <Text style={styles.titulo}>Global</Text>
                        <Text style={styles.texto}>Nuevos casos:{resultado.Global.NewConfirmed}</Text>
                        <Text style={styles.texto}>Casos totales: {resultado.Global.TotalConfirmed}</Text>
                        <Text style={styles.texto}>Nuevos recuperados: {resultado.Global.NewRecovered}</Text>
                        <Text style={styles.texto}>Total recuperados: {resultado.Global.TotalRecovered}</Text>
                        <Text style={styles.texto}>Nuevas muertes: {resultado.Global.NewDeaths}</Text>
                        <Text style={styles.texto}>Total muertes:{resultado.Global.TotalDeaths}</Text>
        
        </View>

    </View>
    );
}
 
export default GlobalScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    texto:{
      color: 'black', 
      textAlign: 'center', 
      fontSize: 14,
      margin: 10,
    },
    titulo:{
      color: 'black', 
      textAlign: 'center', 
      fontSize: 24,
      margin: 10,
      fontWeight: 'bold',
    },
});