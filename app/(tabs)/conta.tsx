import { Link, router } from "expo-router"
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
                    <View>
                        <Text style={styles.name}>João Silva</Text>
                        <Text style={styles.role}>Voluntário</Text>
                    </View> 
                    <TouchableOpacity onPress={handleLogout}>
                        <Text style={styles.btnLogout}>Sair</Text>
                    </TouchableOpacity>   
                </View>
                <Text style={styles.infoContaTitle}>Informações da Conta</Text>
                <View style={styles.infoContaContainer}>
                    <Text style={styles.infoConta}>Email: qwerty@gmail.com</Text>
                    <Text style={styles.infoConta}>Telefone: (11)91234-5678</Text>
                </View>
            </View>
            <Link href={"/participantes"} style={styles.linkParticipantes}>Participantes</Link>
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
    btnLogout: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: "#FF0000",
        padding: 5,
        borderRadius: 8,
    },
    name: {
        color: "#FFFFFF",
        fontSize: 24,
        textAlign: "left",
        alignSelf: "center",
        fontWeight: "bold",
    },
    role: {
        color: "#C2C0B6",
        marginLeft: 5,
    },
    infoContaTitle: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20
    },
    infoContaContainer: {
        width: "100%",
        justifyContent: "space-between",
        marginBottom: 10,
        gap: 10,
        marginTop: 20
    },
    infoConta: {
        color: "#C2C0B6",
        width: "100%",
        textAlign: "left",
        fontSize: 15
    },
    linkParticipantes: {
        backgroundColor: "#00BAFF",
        color: "#fff",
        padding: 5,
        fontSize: 20,
        borderRadius: 8,
        marginTop: 20
    }
});