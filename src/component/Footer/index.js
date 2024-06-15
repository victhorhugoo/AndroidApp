import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Artesanais from '../Artesanais';

export default function Footer() {
 return (
   <View>
    <Text style={styles.title}>você também pode gostar</Text>
    <View style={{ flexDirection: 'row' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ marginHorizontal: 10}}>
                <Artesanais img={require('../../assets/2.png')} cost='R$29,00'>
                    BBQ
                </Artesanais>
            </View>
            <View style={{ marginHorizontal: 10}}>
                <Artesanais img={require('../../assets/7.png')} cost='R$31,00'>
                    Rost Beef
                </Artesanais>
            </View>
            <View style={{ marginHorizontal: 10}}>
                <Artesanais img={require('../../assets/5.png')} cost='R$29,00'>
                    Red Crust
                </Artesanais>
            </View>
            <View style={{ marginHorizontal: 10}}>
                <Artesanais img={require('../../assets/8.png')} cost='R$36,00'>
                    Double Steak
                </Artesanais>
            </View>
            <View style={{ marginHorizontal: 10}}>
                <Artesanais img={require('../../assets/1.png')} cost='R$29,00'>
                    Chicken Crispy
                </Artesanais>
            </View>
        </ScrollView>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        marginVertical: '2%',
        paddingHorizontal: '2%',
    },
});