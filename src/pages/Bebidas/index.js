import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Artesanais from '../../component/Artesanais';

export default function Bebidas() {
  const navigation = useNavigation();
  return (
    <View styles={styles.container}>
      <View styles={styles.header}>
        <Image 
          source={require ('../../assets/banner.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Bebidas</Text>
          <Text style={[styles.text, { color: '#CECECF'}]}>.</Text>
          <Text style={[styles.text, { color: '#CECECF'}]}>GELADAS</Text>
          <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
            <MaterialIcons
              name="filter-list"
              size= {24}
              color="#000"/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line}/>
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Artesanais img={require('../../assets/file (8).png')} cost="R$5,00" onClick={()=> navigation.navigate('Detail')}>
            COCA LATA
          </Artesanais>
          <Artesanais img={require('../../assets/file (12).png')} cost="R$5,00" onClick={()=> navigation.navigate('Detail')}>
            FANTA LATA UVA
          </Artesanais>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Artesanais img={require('../../assets/file (11).png')} cost="R$5,00" onClick={()=> alert('CLICOU')}>
            FANTA LATA
          </Artesanais>
          <Artesanais img={require('../../assets/file (9).png')} cost="R$10,00" onClick={()=> alert('CLICOU')}>
            COCA 1,5L
          </Artesanais>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Artesanais img={require('../../assets/file (4).png')} cost="R$9,00" onClick={()=> alert('CLICOU')}>
            GUARANÁ 1,5L
          </Artesanais>
          <Artesanais img={require('../../assets/file (10).png')} cost="R$12,00" onClick={()=> alert('CLICOU')}>
            COCA 2L
          </Artesanais>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Artesanais img={require('../../assets/file (4).png')} cost="R$12,00" onClick={()=> alert('CLICOU')}>
            FANTA LARANJA 2L
          </Artesanais>
          <Artesanais img={require('../../assets/file (3).png')} cost="R$12,00" onClick={()=> alert('CLICOU')}>
            FANTA UVA 2L
          </Artesanais>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Artesanais >
            Coleslaw
          </Artesanais>
          <Artesanais >
            Original
          </Artesanais>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  },
  header:{
    marginBottom: 8,
  },
  image:{
    width: '100%',
    height: 180,
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
    backgroundColor: '#fff'
  },
  text:{
    fontFamily: 'Roboto_400Regular',
    fontSize: 26,
    marginHorizontal: '1%',
  },
  line:{
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 2,

  },
})