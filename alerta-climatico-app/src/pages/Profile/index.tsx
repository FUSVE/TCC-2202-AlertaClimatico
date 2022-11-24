import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';  
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { AuthContext } from '../../contexts/AuthContext';

export default function Profile() {
    const { signOut, user } = useContext(AuthContext);

    const [name, setName] = useState(user?.name)
    const [url, setUrl] = useState(null)

    async function handleSignOut(){
        await signOut();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.avatarIcon}>
                <Feather name="user" color={"#16202A"} size={105} />
            </TouchableOpacity>

            <Text style={styles.profileName}>
                {user?.name}
            </Text>

            <Text style={styles.userEmail}>
                {user?.email}
            </Text>

            <TouchableOpacity style={styles.updateProfileButton}>
                <Text style={styles.buttonText}>Editar Conta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signOutButton} onPress={ handleSignOut }>
                <Text style={styles.signOutButtonText}>Sair</Text>
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
    profileName:{
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        fontSize: 28,
        fontWeight: "bold",
        color: "#F5f7fb"
    },
    userEmail:{
        color: "#F5f7fb",
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        fontSize: 18,
        fontStyle: "italic"
    },
    updateProfileButton:{
        marginTop: 16,
        backgroundColor: "#FFCA01",
        width: "95%",
        height: 40,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText:{
        fontSize: 18,
        color: "#16202A"
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