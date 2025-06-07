import { useRouter } from "expo-router"
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native"

export default function index() {

    const navigate = useRouter();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logos/logo_embrace.png')} style={styles.logo} />
            <TouchableOpacity style={styles.btnStart} onPress={() => navigate.push("/feed")}>
                <Text style={styles.textBtn}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#262624"
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 16,
    },
    btnStart: {
        backgroundColor: "#00BAFF",
        padding: 10,
        borderRadius: 8,
        textAlign: "center",
        alignItems: "center",
    },
    textBtn: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    }
})