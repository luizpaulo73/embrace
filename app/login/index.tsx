import React from 'react'
import BaseScreen from '../../components/BaseScreen/BaseScreen'
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import { Link } from 'expo-router';

export default function Login() {
    return (
        <BaseScreen platform="embrace">
            <View style={{ width: '100%', justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.title}>Bem Vindo de volta!</Text>
                <Text style={styles.title}>Login</Text>
                <View style={styles.form}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput style={styles.input}/>

                    <Text style={styles.inputLabel}>Senha</Text>
                    <TextInput style={styles.input}/>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Image source={require('../../assets/icons/help_heart.png')} style={{ width: 24, height: 20 }} />
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", marginTop: 20 , gap: 5 }}>
                    <Text style={styles.textLogin}>Não possui uma conta?</Text>
                    <Link href={"/cadastro"} style={styles.linkLogin}>Cadastre-se</Link>
                </View>
            </View>
        </BaseScreen>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        textAlign: 'left',
        width: '90%',
        marginTop: 20,
        fontWeight: 'bold',
    },
    form: {
        width: '100%',
        backgroundColor: '#262624',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: '#65645F',
        backgroundColor: '#30302E',
        borderWidth: 1,
        paddingHorizontal: 10,
        width: '90%',
        borderRadius: 16,
        color: '#FFFFFF',
        marginTop: 5,
    },
    inputLabel: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'left',
        width: '90%',
        marginTop: 15,
    },
    button: {
        height: 40,
        backgroundColor: '#00BAFF',
        borderRadius: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginLeft: 10,
    },
    textLogin: {
        color: '#FFFFFF',
        fontSize: 16,
        marginTop: 10,
    },
    linkLogin: {
        color: '#00BAFF',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
    }
});
