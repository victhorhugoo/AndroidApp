import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Artesanais(props) {
    
    function filterDesc(desc){
        if(desc.length < 24){
            return desc;
        }
        return `${desc.substring(0, 13)}...`;
    }

    return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image
                source={props.img}
                style={[styles.artesanaisImg, { borderRadius: 10 }]}
            />
            <Text style={styles.artesanaisText}>{filterDesc(props.children)}</Text>
            <View opacity={0.4}>
                <Text style={styles.artesanaisText}>{props.cost}</Text>
            </View>
    </TouchableOpacity>
    );
    }

    const styles = StyleSheet.create({
        container:{
            paddingVertical: '3%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        artesanaisImg:{
            width: 150,
            height: 150,
        },
        artesanaisText:{
            fontSize: 16,
        },
    })