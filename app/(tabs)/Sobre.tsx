import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Sobre(){
    return (
        <View style={styles.container}>
            <Text>Essa é a tela de Sobre!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#f4f9ff',
    },
}) 