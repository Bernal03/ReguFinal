import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {ListItem, Header, Image, SearchBar} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PaisesContext} from '../Context/PaisesContext';



const PaisScreen = ({navigation}) => {
const {resultado, pais, setPais, setResultado} = useContext(PaisesContext);
    
    const buscar = (pais) => {
        //console.log(peli)
        setResultado(true);
        const api_url = `https://api.covid19api.com/summary`;
        
        fetch(api_url)
          .then(data => {
            return data.json();
          })
          .then(resultado => {
            //console.log(resultado);
    
            const { Search = [] } = resultado;
    
            setPais(Search);
            setResultado(Search.length)
            console.log(Search);
          });
      };


     


    return (
    
    <View style={styles.container}>
        <Header
                leftComponent={{ icon: 'ios-menu-outline', color: '#fff', onPress:()=>navigation.openDrawer() }}
                centerComponent={{ text: 'Covid-19', style: { color: '#fff' } }}
                containerStyle={{backgroundColor: '#006400'}}
            />

        <SearchBar
            round
            containerStyle={{
                backgroundColor:'transparent',
                borderTopWidth:0,
                borderBottomWidth:0,
            }}
            inputStyle={{backgroundColor:'white'}}
            onChangeText={(texto)=>{
                setPais(texto);
                resultado(texto);
            }}
            onClear={()=>{
                setPais("");
                setResultado(false);
                setResultado([])
            }}
            value={pais}
            placeholder="Escribe aqui..."
        />

        <View>
        {
          resultado.Countries.map((item, i)=>

          item.Country===pais
          &&

          <View>
                        <Image
                            source={require('../Content/covid.jpg')}
                            style={{ width: 200, height: 200 }}
                        />
                        <Text style={styles.titulo}>Buscador</Text>
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
export default PaisScreen;

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