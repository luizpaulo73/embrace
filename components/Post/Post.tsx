import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import ProgressBar from "../ProgressBar/ProgressBar";

export default function Feed() {
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 5, flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.profileContainer}>
                        <Image
                            source={require("../../assets/profilePictures/hospital.png")}
                            style={styles.profileImage}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>Hospital xyz</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                source={require("../../assets/icons/clock.png")}
                                style={{ width: 20, height: 20, marginLeft: 8 }}
                            />
                            <Text style={styles.infoPost}>2h</Text>
                            <Image
                                source={require("../../assets/icons/pin.png")}
                                style={{ width: 10, height: 14, marginLeft: 8 }}
                            />
                            <Text style={styles.infoPost}>São Paulo, SP</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.typePost}>Saúde</Text>
            </View>

            <Text style={styles.descPost}>Precisamos de voluntários para a nossa campanha de vacinação</Text>
            <Image
                source={require("../../assets/postPictures/vaccine.png")}
                style={{ width: "100%", borderRadius: 16, marginTop: 10 }}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                <TouchableOpacity style={styles.button}>
                    <Image
                        source={require("../../assets/icons/help_heart.png")}
                        style={{ width: 18, height: 15 }}
                    />
                    <Text style={styles.textButton}>Quero Ajudar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonShare}>
                    <Image
                        source={require("../../assets/icons/share.png")}
                        style={{ width: 14, height: 15 }}
                    />
                </TouchableOpacity>
            </View>
            <ProgressBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#30302E",
        borderWidth: 1,
        borderColor: "#65645F",
        borderRadius: 16,
        width: "90%",
        alignSelf: "center",
        marginTop: 100,
        padding: 10,
    },
    text: {
        color: "#fff",
        fontSize: 20,
        marginLeft: 8,
    }, 
    profileContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#C2C0B6",
        borderRadius: 9999,
        width: 50,
        height: 50,
        overflow: "hidden",
    },
    profileImage: {
        width: 40,
        height: 40,
        resizeMode: "cover"
    },
    infoPost: {
        color: "#C2C0B6",
        marginLeft: 5
    },
    typePost: {
        color: "#ffffff",
        backgroundColor: "#00BAFF",
        padding: 5,
        borderRadius: 9999,
        height: 30,
        width: 70,
        textAlign: "center",
    },
    descPost: {
        color: "#ffffff",
        fontSize: 16,
        width: "100%",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00BAFF",
        paddingVertical: 2,
        borderRadius: 9999,
        width: "88%",
    },
    textButton: {
        color: "#ffffff",
        fontSize: 16,
        marginLeft: 8,
    },
    buttonShare: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00BAFF",
        borderRadius: 9999,
        width: "10%",
        marginLeft: 5,
    },

});