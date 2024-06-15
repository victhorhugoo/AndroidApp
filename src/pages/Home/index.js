import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Bebidas from '../Bebidas';
import Artesanais from '../../component/Artesanais';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View styles={styles.container}>
      <View styles={styles.header}>
        <Image 
          source={require ('../../assets/banner.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>ARTESANAIS</Text>
          <Text style={[styles.text, { color: '#CECECF'}]}>.</Text>
          <Text style={[styles.text, { color: '#CECECF'}]}>BOVINO</Text>
          <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}} onClick={()=> navigation.navigate('Bebidas')}>
            <MaterialIcons
              name="filter-list"
              size= {24}
              color="#000" 
              />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line}/>
      <ScrollView>
        <Text style={styles.text}>LANÇAMENTO</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Artesanais img={require('../../assets/10.png')} cost="R$29,00" onClick={()=> navigation.navigate('Detail')}>
            Coleslaw
          </Artesanais>
          <Artesanais img={require('../../assets/6.png')} cost="R$29,00" onClick={()=> navigation.navigate('Detail')}>
            Original
          </Artesanais>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Artesanais img={require('../../assets/2.png')} cost="R$29,00" onClick={()=> alert('CLICOU')}>
            BBQ
          </Artesanais>
          <Artesanais img={require('../../assets/3.png')} cost="R$31,00" onClick={()=> alert('CLICOU')}>
            Avalanche
          </Artesanais>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Artesanais img={require('../../assets/4.png')} cost="R$29,00" onClick={()=> alert('CLICOU')}>
            Supremel
          </Artesanais>
          <Artesanais img={require('../../assets/5.png')} cost="R$29,00" onClick={()=> alert('CLICOU')}>
            Red Crost
          </Artesanais>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Artesanais img={require('../../assets/7.png')} cost="R$34,00" onClick={()=> alert('CLICOU')}>
            Rost Beef
          </Artesanais>
          <Artesanais img={require('../../assets/8.png')} cost="R$36,00" onClick={()=> alert('CLICOU')}>
            Double Steak
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Artesanais img={require('../../assets/7.png')} cost="R$34,00" onClick={()=> alert('CLICOU')}>
            Rost Beef
          </Artesanais>
          <Artesanais img={require('../../assets/8.png')} cost="R$36,00" onClick={()=> alert('CLICOU')}>
            Double Steak
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