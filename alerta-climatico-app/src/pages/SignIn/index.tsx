import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { AuthContext } from '../../contexts/AuthContext'; 

export default function SignIn() {

    const { signIn } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(){

        if(email === '' || password === ''){
            return;
        }

        await signIn({ email, password })
    }

    return (
        <View style={styles.container}>
            <Image
            style={styles.logo}
            source={require('../../assets/logotipo.png')}
            />

            <View style={styles.inputContainer}>
                <Text style={styles.inputPlaceholder}>
                    Email
                </Text>

                <TextInput
                placeholder="Digite seu email"
                placeholderTextColor={"#F5f7fb"}
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                />

                <Text style={styles.inputPlaceholder}>
                    Senha
                </Text>

                <TextInput
                placeholder="Digite sua senha"
                placeholderTextColor={"#F5f7fb"}
                secureTextEntry={true}
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>
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