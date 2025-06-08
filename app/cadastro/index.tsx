import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import BaseScreen from "../../components/BaseScreen/BaseScreen";
import { Link, router } from "expo-router";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import tipoUsuarios from "../../data/tipoUsuario.json";
import DropDownPicker from "react-native-dropdown-picker";

export default function Cadastro() {

    const [valueType, setValueType] = useState(null);
    const [openType, setOpenType] = useState(false);
    const [itemsType, setItemsType] = useState(tipoUsuarios);

    return (
        <BaseScreen platform="embrace">
            <View style={{ width: '90%', flexDirection: "row", alignItems: "center", gap: 10, height: 50 }}>
                <TouchableOpacity onPress={() => router.push("/")}>
                    <Image source={require("../../assets/icons/back.png")} style={{width: 20, height: 14, marginTop: 20}}/>
                </TouchableOpacity>
                <Text style={styles.title}>Cadastro</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.inputLabel}>Nome</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.inputLabel}>Email</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.inputLabel}>Senha</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.inputLabel}>Telefone</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.inputLabel}>Tipo de Usuário</Text>
                <DropDownPicker
                    open={openType}
                    value={valueType}
                    items={itemsType}
                    setOpen={setOpenType}
                    setValue={setValueType}
                    setItems={setItemsType}
                    placeholder="Selecione o tipo do usuário"
                    style={styles.input}
                    dropDownContainerStyle={styles.dropdownContainer}
                    textStyle={styles.labelDropdown}
                    zIndex={2000}
                />
                
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
        width: '90%',
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
        width: '100%',
        borderRadius: 16,
        color: '#FFFFFF',
        marginTop: 5,
    },
    inputLabel: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'left',
        width: '100%',
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
    },
    dropdownContainer: {
        backgroundColor: '#30302E',
        borderColor: '#65645F',
        width: "100%",
        borderWidth: 1,
        alignSelf: 'center',
    },
    labelDropdown: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'left',
        width: '100%',
    },
});