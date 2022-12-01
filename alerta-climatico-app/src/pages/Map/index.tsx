import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

export default function Map() {


    return (
        <View style={styles.container}>

            <MapView
                mapType='standard'
                style={{width:'100%', height:'100%'}}
                initialRegion={{
                    latitude:-22.6335,
                    longitude:-43.9046,
                    latitudeDelta:0.0922,
                    longitudeDelta:0.0421
                }}>

                    <Marker 
                        image={require('../../assets/alerta_enchente_icon.png')}
                        coordinate={{ latitude: -22.62846, longitude: -43.89885 }}
                        title="Centro - Risco de Alagamento: [Estável]"
                        description="Risco médio em caso de aumento do nível do Rio Piraí."
                    />

                    <Marker 
                        image={require('../../assets/alerta_enchente_icon.png')}
                        coordinate={{ latitude: -22.63095, longitude: -43.91360 }}
                        title="Vale Verde - Risco de Alagamento: [Estável]" 
                        description="Risco alto em caso de aumento do nível do Rio Piraí."
                    />

                    <Marker 
                        image={require('../../assets/alerta_enchente_icon.png')}
                        coordinate={{ latitude: -22.63286, longitude: -43.90117 }}
                        title="Nova Esperança - Risco de Alagamento: [Estável]" 
                        description="Risco médio em caso de aumento do nível do Rio Piraí."
                    />

                    <Marker 
                        image={require('../../assets/alerta_enchente_icon.png')}
                        coordinate={{ latitude: -22.70322, longitude: -43.88069 }}
                        title="São João Marcos - Risco de Alagamento: [Estável]" 
                        description="Risco alto em caso de aumento do nível do Rio Piraí."
                    />

                    <Marker 
                        image={require('../../assets/alerta_enchente_icon.png')}
                        coordinate={{ latitude: -22.69703, longitude: -43.90646 }}
                        title="Clube de Pesca Piraí - Risco de Alagamento: [Estável]" 
                        description="Risco alto em caso de aumento do nível do Rio Piraí."
                    />

                    <Marker 
                        image={require('../../assets/alerta_enchente_icon.png')}
                        coordinate={{ latitude: -22.64421, longitude: -43.89592 }}
                        title="Sanatório da Serra - Risco de Alagamento: [Estável]" 
                        description="Risco médio em caso de aumento do nível do Rio Piraí."
                    />

                    <Marker 
                        image={require('../../assets/alerta_enchente_icon.png')}
                        coordinate={{ latitude: -22.62944, longitude: -43.90690 }}
                        title="Quatro de Abril - Risco de Alagamento: [Estável]" 
                        description="Risco alto em caso de aumento do nível do Rio Piraí."
                    />  

                    <Marker 
                        image={require('../../assets/alerta_enchente_icon.png')}
                        coordinate={{ latitude: -22.62538, longitude: -43.90617 }}
                        title="Quatro de Abril - Risco de Alagamento: [Estável]" 
                        description="Risco baixo em caso de aumento do nível do Rio Piraí."
                    />                  
                    
            </MapView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#16202A",
    },
    logo:{
        width: 150,
        height: 180,
        marginBottom: 18
    },
    inputContainer:{
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 14,
    },
    inputPlaceholder:{
        color: "#F5f7fb",
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginLeft: 13,
        marginRight: 13,
    },
    input:{
        width: '95%',
        height: 40,
        backgroundColor: "#16202A",
        color: "#F5f7fb",
        paddingHorizontal: 8,
        marginBottom: 15,
        borderRadius: 5,
        borderWidth: 2,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: "#FFCA01"
    },
    button:{
        justifyContent: "center",
        alignItems: "center",
        width: "95%",
        height: 40,
        backgroundColor: "#FFCA01",
        borderRadius: 5
    },
    buttonText:{
        color: "#16202A",
        fontWeight: "bold",
        fontSize: 18
    }
})