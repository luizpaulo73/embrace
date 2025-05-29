import { useRouter } from "expo-router"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

export default function index() {

    const navigate = useRouter();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigate.push("/feed")}><Text>asdasdasd</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#262624"
    }
})