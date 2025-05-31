import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import BaseScreen from "../../components/BaseScreen/BaseScreen";
import { Link } from "expo-router";

export default function index() {
    return (
        <BaseScreen platform="embrace">
            <Text style={styles.title}>Cadastro</Text>
            <View style={styles.form}>
                <Text style={styles.inputLabel}>Nome</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.inputLabel}>Email</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.inputLabel}>Senha</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.inputLabel}>Telefone</Text>
                <TextInput style={styles.input}/>

                <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ width: '70%' }}>
                        <Text style={styles.inputLabel}>Cidade</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View style={{ width: '30%' }}>
                        <Text style={styles.inputLabel}>Estado</Text>
                        <TextInput style={styles.input}/>
                    </View> 
                </View>
                
            </View>

            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Image source={require('../../assets/icons/help_heart.png')} style={{ width: 24, height: 20 }} />
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", marginTop: 20 , gap: 5 }}>
                <Text style={styles.textLogin}>Já possui uma conta?</Text>
                <Link href={"/login"} style={styles.linkLogin}>Login</Link>
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