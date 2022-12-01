import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';  
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { AuthContext } from '../../contexts/AuthContext';

export default function Account() {
    const { user } = useContext(AuthContext);

    const [name, setName] = useState(user?.name)
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.avatarIcon}>
                <Feather name="user" color={"#16202A"} size={105} />
            </TouchableOpacity>

            <Text style={styles.profileName}>
                Nome
            </Text>

            <Text style={styles.userDetail}>
                {user?.name}
            </Text>

            <Text style={styles.profileName}>
                Email
            </Text>

            <Text style={styles.userDetail}>
                {user?.email}
            </Text>

            <TouchableOpacity style={styles.updateProfileButton}>
                <Text style={styles.buttonText}>Salvar alterações</Text>
            </TouchableOpacity>
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
    avatarIcon:{
        marginTop: 20,
        backgroundColor: "#F5f7fb",
        width: 165,
        height: 165,
        borderRadius: 90,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9,
    },
    accountDetail:{
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        fontSize: 20,
        color: "#F5f7fb"
    },
    profileName:{
        marginTop: 20,
        marginRight: 20,
        marginLeft: 50,
        fontSize: 20,
        fontWeight: "bold",
        color: "#F5f7fb",
        alignSelf: "flex-start"
    },
    userDetail:{
        color: "#16202A",
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        paddingBottom: 8,
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        fontSize: 18,
        fontStyle: "italic",
        backgroundColor: "#F5f7fb",
        borderRadius: 2,
        width: "75%"
    },
    updateProfileButton:{
        marginTop: 16,
        backgroundColor: "#FFCA01",
        width: "75%",
        height: 40,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText:{
        fontSize: 18,
        color: "#16202A",
        fontWeight: "bold"
    },
    signOutButton:{
        marginTop: 16,
        backgroundColor: "#16202A",
        width: "95%",
        height: 40,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#F5f7fb"
    },
    signOutButtonText:{
        fontSize: 18,
        color: "#F5f7fb"
    }
})