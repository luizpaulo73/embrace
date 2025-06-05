import { useState } from 'react'
import BaseScreen from '../../components/BaseScreen/BaseScreen'
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet, Alert } from 'react-native'
import { Link, router } from 'expo-router';
import { login } from '../../service/auth';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const sucess = await login(email, password);
        if (sucess) {
            router.push('/conta');
        } else {
            Alert.alert('Erro', 'Email ou senha incorretos');
        }
    }

    return (
        <BaseScreen platform="embrace">
            <View style={{ width: '100%', justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: '90%', flexDirection: "row", alignItems: "center", gap: 10, height: 50 }}>
                    <TouchableOpacity onPress={() => router.push("/")}>
                        <Image source={require("../../assets/icons/back.png")} style={{width: 20, height: 14, marginTop: 20}}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Bem Vindo de Volta!</Text>
                </View>
                <Text style={styles.title}>Login</Text>
                <View style={styles.form}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}   
                    />

                    <Text style={styles.inputLabel}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
