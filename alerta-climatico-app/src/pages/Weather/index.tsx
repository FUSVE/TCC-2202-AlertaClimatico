import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function Weather() {

    return (
        <ScrollView>
            <View style={styles.container}>
                
                <Text style={styles.cityName}>
                    Piraí, RJ
                </Text>
        
                <Text style={styles.temperature}>
                    20°
                </Text>
        
                <Feather style={styles.weatherIcon} name="cloud-drizzle" color={"#F5f7fb"} size={50} />
        
                <View style={styles.columns}>
                    <View>
                        <Text style={styles.TitleInfoLeft}>
                            Hoje
                        </Text>
                    </View>
        
                    <View>
                        <Text style={styles.TitleInfoRight}>
                            01/12/2022
                        </Text>
                    </View>
                </View>
        
                <View style={styles.columns}>
                    <View>
                        <Text style={styles.weatherInfoLeft}>
                            Sensação Térmica
                        </Text>
                        <Text style={styles.weatherInfoLeft}>
                            Umidade
                        </Text>
                        <Text style={styles.weatherInfoLeft}>
                            Pressão
                        </Text>
                        <Text style={styles.weatherInfoLeft}>
                            Condição atual
                        </Text>
                        <Text style={styles.weatherInfoLeft}>
                            Velocidade do vento
                        </Text>
                    </View>
        
                    <View>
                        <Text style={styles.weatherInfoRight}>
                            19° C
                        </Text>
                        <Text style={styles.weatherInfoRight}>
                            80%
                        </Text>
                        <Text style={styles.weatherInfoRight}>
                            1010.2 mb
                        </Text>
                        <Text style={styles.weatherInfoRight}>
                            Tempo nublado. Grande chance de chuva.
                        </Text>
                        <Text style={styles.weatherInfoRight}>
                            6 km/h
                        </Text>
                    </View>
                </View>
        
                <View style={styles.columns}>
                    <View>
                        <Text style={styles.TitleForecastRight}>
                        Sexta-feira
                        </Text>
                    </View>
        
                    <View>
                        <Text style={styles.TitleForecastRight}>
                        02/12/2022
                        </Text>
                    </View>
                </View>
        
                <View style={styles.columns}>
                    <View>
                        <Text style={styles.ForecastInfoLeft}>
                            Temperatura mínima
                        </Text>
                        <Text style={styles.ForecastInfoLeft}>
                            Temperatura máxima
                        </Text>
                        <Text style={styles.ForecastInfoLeft}>
                            Sensação térmica mínima
                        </Text>
                        <Text style={styles.ForecastInfoLeft}>
                            Sensação térmica máxima
                        </Text>
                        <Text style={styles.ForecastInfoLeft}>
                            Umidade mínima
                        </Text>
                        <Text style={styles.ForecastInfoLeft}>
                            Umidade máxima
                        </Text>
                        <Text style={styles.ForecastInfoLeft}>
                            Pressão
                        </Text>
                        <Text style={styles.ForecastInfoLeft}>
                            Probabilidade de Chuva
                        </Text>
                        <Text style={styles.ForecastInfoLeft}>
                            Precipitação
                        </Text>
                        <Text style={styles.ForecastInfoLeft}>
                            Velocidade média do vento
                        </Text>
                    </View>
        
                    <View>
                        <Text style={styles.ForecastInfoRight}>
                            19° C
                        </Text>
                        <Text style={styles.ForecastInfoRight}>
                            27° C
                        </Text>
                        <Text style={styles.ForecastInfoRight}>
                            19° C
                        </Text>
                        <Text style={styles.ForecastInfoRight}>
                            30° C
                        </Text>
                        <Text style={styles.ForecastInfoRight}>
                            60%
                        </Text>
                        <Text style={styles.ForecastInfoRight}>
                            80%
                        </Text>
                        <Text style={styles.ForecastInfoRight}>
                            1004 hPa
                        </Text>
                        <Text style={styles.ForecastInfoRight}>
                            30%
                        </Text>
                        <Text style={styles.ForecastInfoRight}>
                            100 mm
                        </Text>
                        <Text style={styles.ForecastInfoRight}>
                            6 km/h
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#16202A",
        color: "#F5f7fb"
    },
    logo:{
        width: 150,
        height: 180,
        marginBottom: 18
    },
    cityName:{
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20,
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFCA01"
    },
    weatherIcon:{
        marginTop: 30,
    },
    temperature:{
        marginTop: 25,
        marginRight: 20,
        marginLeft: 20,
        fontSize: 40,
        color: "#F5f7fb"
    },
    weatherInfoLeft:{
        color: "#F5f7fb",
        marginBottom: 24,
        width: "80%",
        marginLeft: "78%",
        fontWeight: "bold"
    },
    weatherInfoRight:{
        color: "#F5f7fb",
        marginBottom: 20,
        width: "50%",
        marginLeft: "30%",
        fontWeight: "bold"
    },
    columns:{
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    forecastTitle:{
        color: "#F5f7fb",
        fontWeight: "bold",
        fontSize: 18,
    },
    TitleInfoLeft:{
        color: "#FFCA01",
        marginBottom: 24,
        width: "80%",
        marginLeft: "30%",
        fontWeight: "bold",
        fontSize: 17,
    },
    TitleInfoRight:{
        color: "#FFCA01",
        marginBottom: 20,
        width: "60%",
        marginLeft: "20%",
        fontWeight: "bold",
        fontSize: 17,
    },
    TitleForecastLeft:{
        color: "#FFCA01",
        marginBottom: 24,
        width: "80%",
        marginLeft: "30%",
        fontWeight: "bold",
        fontSize: 17,
    },
    TitleForecastRight:{
        color: "#FFCA01",
        marginBottom: 20,
        width: "60%",
        marginLeft: "19%",
        fontWeight: "bold",
        fontSize: 17,
    },
    ForecastInfoLeft: {
        color: "#F5f7fb",
        marginBottom: 24,
        width: "80%",
        marginLeft: "14%",
        fontWeight: "bold"
    },
    ForecastInfoRight: {
        color: "#F5f7fb",
        marginBottom: 23,
        width: "50%",
        marginLeft: "30%",
        fontWeight: "bold"
    }
    
})