import { SafeAreaView, LoadingIcon, StyleSheet, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'

import Api from '../../Api';
import { UserContext } from '../../contexts/UserContext';

export default function Preload() {

  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async() => {
      const token = await AsyncStorage.getItem('token');
      if(token){
        //Verifica se tem token cadastrado
        let res = await Api.checkToken(token);
        if(res.token){
          await AsyncStorage.setItem('token', res.token);
          userDispatch({
            type: 'setAvatar',
            payload:{
              avatar: res.data.avatar
            }
          });
          navigation.reset({
            routes:[{name:'MainTab'}]
          });
        }else{
          navigation.navigate('SignIn');
        }
      }else{
        //Caso não tenha um token cadastrado
        navigation.navigate('SignIn');
      }
    }
    checkToken();
  }, []);

  return (
    <SafeAreaView style={styles.Container}>
        <Image 
          source={require ('../../assets/logo.png')}
          style={styles.image}
          />
          <ActivityIndicator size='large' style={styles.Loadingicon}></ActivityIndicator>

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
    Loadingicon:{
      marginTop: '10%',
    },
  });