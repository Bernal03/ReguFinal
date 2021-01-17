import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListItem, Header, Image} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PaisesContext} from '../Context/PaisesContext';



const MexicoScreen = ({navigation}) => {
const {resultado, pais, setPais} = useContext(PaisesContext);
    
    


    return (
    
    <View style={styles.container}>
        <Header
                leftComponent={{ icon: 'ios-menu-outline', color: '#fff', onPress:()=>navigation.openDrawer() }}
                centerComponent={{ text: 'Covid-19', style: { color: '#fff' } }}
                containerStyle={{backgroundColor: '#006400'}}
            />

        <View>
        {
          resultado.Countries.map((item, i)=>

          item.Country==="Mexico"
          &&

          <View>
                        <Image
                            source={require('../Content/covid.jpg')}
                            style={{ width: 200, height: 200 }}
                        />
                        <Text style={styles.titulo}>Informacion de Mexico</Text>
                        <Text style={styles.texto}>Nuevos casos: {item.NewConfirmed}</Text>
                        <Text style={styles.texto}>Casos totales: {item.TotalConfirmed}</Text>
                        <Text style={styles.texto}>Nuevos recuperados: {item.NewRecovered}</Text>
                        <Text style={styles.texto}>Total recuperados: {item.TotalRecovered}</Text>
                        <Text style={styles.texto}>Nuevas muertes: {item.NewDeaths}</Text>
                        <Text style={styles.texto}>Total muertes: {item.TotalDeaths}</Text>
          </View>
          )
        }
        </View>
    </View>
    ); 
}
export default MexicoScreen;

const styles = StyleSheet.create({
    container:{
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