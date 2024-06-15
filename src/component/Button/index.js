import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Button() {
 return (
   <View style={styles.container}>
    <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.title}>
        Adicionar
        R$29,00
      </Text>
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnContainer:{
    width: '80%',
    height: 50,
    borderRadius: 15,
    backgroundColor: '#000',
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 24,
    color: '#fff'
  },

});