import { Text, StyleSheet, SafeAreaView, Image, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../contexts/UserContext';

import Api from '../../Api'


export default function SignIn() {
  const { dispatch: userDispatch } = useContext(UserContext);

  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passwordlField, setPasswordField] = useState('');

  const handleSignclick = async() => {
    if(emailField != '' && passwordlField != ''){
      let json = await Api.SignIn(emailField, passwordlField);
      console.log(json);

      if(json.token){
        await AsyncStorage.setItem('token', json.token);
        userDispatch({
          type: 'setAvatar',
          payload:{
            avatar: json.data.avatar
          }
        });
        navigation.reset({
          routes:[{name:'MainTab'}]
        });
      }else{
        alert('Email e/ou senha inválidos!')
      }
    }else{
      alert('Preencha todos os campos!');
    }

  }
  const handleMessageButtonclick = () => {
    navigation.reset({
      routes: [{ name: 'SignUp'}]
    });
  }

 retu9rn (
   <SafeAreaView style={styles.Container}>
      <Image 
        source={require ('../../assets/logo.png')}
        style={styles.image}
      />
      <View style={styles.InputArea}>
        <View style={styles.InputArea1}>
          <Feather
            name='mail'
            size={24}
            color='#000'
          />
          <TextInput style={styles.Input} placeholder='Digite o seu email' opacity={0.6} value={emailField} onChangeText={t=>setEmailField(t)}/>          
        </View>
        <View style={styles.InputArea1}>
          <Feather
            name='lock'
            size={24}
            color='#000'
          />
          <TextInput style={styles.Input} placeholder='Digite a sua senha' opacity={0.6} value={passwordlField} onChangeText={t=>setPasswordField(t)} secureTextEntry={true}/> 
        </View>
        <TouchableOpacity style={styles.CustomButton} onPress={handleSignclick}>
          <Text style={styles.CustomButtonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.SignMessageButton} onPress={handleMessageButtonclick}>
        <Text style={styles.SignMessageButtonText}>Ainda não possui uma conta?</Text>
        <Text style={styles.SignMessageButtonTextBold}>Cadastre-se!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container:{
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width: '90%',
    height: 180,
  },
  InputArea:{
    width: '100%',
    padding: 40,
    
  },
  InputArea1:{
    width: '100%',
    height: 40,
    backgroundColor: '#A9A9A9',  
    flexDirection: 'row',
    borderRadius: 30,
    paddingLeft: 15,
    alignItems: 'center',
    marginBottom: 15
},
Input:{
  flex: 1,
  fontSize: 16,
  color: '#000',
  marginLeft: 10,
},
  SignInput:{

  },
  CustomButton:{
    height: 60,
    backgroundColor: '#008B8B',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  CustomButtonText:{
    fontSize: 18,
    color: '#fff',
  },
  SignMessageButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  SignMessageButtonText:{
    color:'#fff',
    fontSize: 16
  },
  SignMessageButtonTextBold:{
    color:'#DAA520',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5
  },
});