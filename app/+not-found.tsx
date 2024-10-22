import { View, StyleSheet } from "react-native";
import { Stack, Link } from "expo-router";

export default function NotFoundScreen(){
    return(
        <>
            <View style={styles.container}>
                <Link href="/Home" style={styles.button}>
                    Ir para a Home!
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        width: '100%',
        height: '100%',
    },

    button: {
        color: '#FFFFFF',
        textDecorationLine: 'underline',
        fontSize: 30,
    }
})