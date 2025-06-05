import { router } from "expo-router"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import BaseScreen from "../../components/BaseScreen/BaseScreen"
import { useState, useEffect } from "react"
import { checkLogin, logout } from "../../service/auth";

export default function Conta() {

    const [logged, setLogged] = useState<boolean>(false);

    useEffect(() => {
        const verify = async () => {
            const isLogged = await checkLogin();
            if (!isLogged) {
                router.push("/login");
            } else {
                setLogged(true);
            }
        };
        verify();
    }, [])

    const handleLogout = async () => {
        await logout();
        router.push("/login");
    };

    return (  
        <BaseScreen platform="embrace">
            <View style={styles.container}>
                <View style={{ marginBottom: 10, flexDirection: "row", justifyContent: "space-between", width: "100%" }}> 
                    <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>Conta</Text>
                    <TouchableOpacity onPress={handleLogout}>
                        <Text style={{ color: "#fff", fontSize: 16 }}>Sair</Text>
                    </TouchableOpacity>   
                </View>
            </View>
        </BaseScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#30302E",
        borderWidth: 1,
        borderColor: "#65645F",
        borderRadius: 16,
        width: "90%",
        alignSelf: "center",
        marginTop: 10,
        padding: 10,
    },
});