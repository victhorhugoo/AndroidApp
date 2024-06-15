import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React from 'react';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: 'Coleslaw'
  })
  return (
    <ScrollView>
      <Image
        source={require('../../assets/10.png')}
        style={styles.image}
        resizeMode='cover'
      />
      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24}]}>R$29,00</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 31}]}>Coleslaw</Text>
        </View>
        <View>
        <Text style={styles.textContent}>
          Pão brioche, blend bovino de 150g queijo mussarela, bacon em fatias e salada coleslaw. Uma combinação, simplesmente perfeita !! Você vai se apaixonar. Acompanha fritas !!
        </Text>
      </View>
      </View>
      <Button/>
      <View style={styles.line}/>
      <Footer/>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  image:{
    width: '100%',
    height: 300,
  },
  title:{
    fontFamily: 'Roboto_400Regular',
    paddingTop: '3%',
    paddingHorizontal: '4%',
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '4%',
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#000',
    marginVertical: '2%',
  }
});