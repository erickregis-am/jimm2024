import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Home(){
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>

            <View style={styles.header}>

                <View style={styles.imgContainer}>
                <Image source={require('../../assets/images/Flag.png')}
                style={styles.imgFlag}></Image>
                <View style={styles.imgFlagText}>
                    <Ionicons name="radio-button-off" color={'#ef1623'} backgroundColor={'#ef1623'} 
                    sizer={16} style={styles.FlagIcon}>
                    </Ionicons>
                    <Text style={{letterSpacing: 1}}>2EMAA</Text></View>
                </View>

                <View>
                    <Text style={{padding: 10, fontSize: 16, color: '#014ea2', borderWidth: 1.5, borderRadius: 3, 
                    borderColor: '#014ea2', marginTop: 10, letterSpacing: 2}}>
                    Portfólio Informativo-Interativo
                    </Text>
                </View>

                <View style={{display: 'flex', width: '15%', justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image source={require('../../assets/images/logoJimm.png')}
                    style={styles.imgLogoJimm} >
                    </Image>
                </View>
            </View>
            
 
            <Text style={{display: 'flex', marginTop: 100
                , fontSize: 30, color: '#FFFFFF', backgroundColor: '#014ea2',
                width: '100%', marginBottom: 10, padding: 15, borderRadius: 5,
                textAlign: 'center', letterSpacing: 2, fontWeight: 'bold'
            }}>
                Coréia do Norte, PyongJang
            </Text>

            <LinearGradient colors={['#014ea2', '#62a8f2']} style={{display: 'flex', width: '100%', 
                justifyContent: 'center', alignItems: 'center'
                , padding: 10, borderRadius: 5
            }}>
                <Image source={require('../../assets/images/pyongyang.jpg')}
                style={styles.cityImg}
                ></Image>
            </LinearGradient>

            <Text style={{marginTop: 80, fontSize: 26, letterSpacing: 2, color: '#ef1623', 
                fontWeight: 'bold', padding: 20, borderColor: '#ef1623', borderWidth: 3, borderStyle: 'dashed',
                borderRadius: 8, backgroundColor: '#FFFFFF'
                }}>Um pouquinho Sobre:
            </Text>

            <LinearGradient colors={['#ef1623', '#830F11']} style={{marginTop: 80, width: '100%', height: 'auto', padding: 30}}>
                <View style={{backgroundColor: '#FFFFFF', borderRadius: 10}}>
                    <Text style={{textAlign: 'center', fontSize: 22, fontWeight: 'bold' ,letterSpacing: 1, lineHeight: 40,
                        padding: 20, color: '#ef1623'
                    }}>A Coreia do Norte, oficialmente chamada de República Popular Democrática da Coreia (RPDC), é um país localizado no 
                        leste da Ásia, na Península Coreana. 
                        Faz fronteira com a China e a Rússia ao norte, e com a Coreia do Sul ao sul, sendo separada 
                        desta última pela Zona Desmilitarizada da Coreia (DMZ)
                    </Text>
                </View>
            </LinearGradient>

            <Text style={{fontSize: 20, color: '#ef1623', letterSpacing: 2, fontWeight: 'bold'
                , marginTop: 100, marginBottom: 100
            }}>
                Explore o resto do Portfólio através do menu abaixo!
            </Text>

        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
        height: 1600,
        backgroundColor: '#deebf9',
    },

    header:{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    imgContainer: {
        display: 'flex',
        width: '15%',
        gap: 10,
        alignItems: 'center',
        padding: 10,
        marginLeft: 20,
        marginTop: 20,
    },

    imgFlag: {
        resizeMode: 'contain',
        height: 60,
    },

    imgFlagText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },

    FlagIcon: {
        borderRadius: 20,
    },

    cityImg: {
        resizeMode:'contain',
        height: 450,
        borderColor: '#62a8f2',
        borderWidth: 4,
        borderRadius: 4,
        width: 720,
        elevation: 20,
    },

    imgLogoJimm: {
        resizeMode: 'contain',
        height: 90,
    },
}) 