import { Link } from "expo-router"
import { View, Text, StyleSheet } from "react-native"
import BaseScreen from "../../components/BaseScreen/BaseScreen"

export default function Conta() {
    return (  
        <BaseScreen platform="embrace">
            <View style={styles.container}>
                <View style={{ marginBottom: 10, flexDirection: "row", justifyContent: "space-between", width: "100%" }}> 
                   <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>Conta</Text>
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