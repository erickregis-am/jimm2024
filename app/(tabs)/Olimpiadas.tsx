import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Olimpiadas(){
    return (
        <View style={styles.container}>
            <Text>Essa é a tela de Olimpíadas!</Text>
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