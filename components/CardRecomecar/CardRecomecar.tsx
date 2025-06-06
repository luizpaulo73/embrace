import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { timeAgo } from '../../utils/timeAgo';

interface FormInput {
    titulo: string;
    cep: string;
    cidade: string;
    estado: string;
    createdAt: string; 
}

interface PostProps {
    formInput: FormInput;
}

export default function CardRecomecar({ formInput }: PostProps) {
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 5, flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.profileContainer}>
                        <Image
                            source={require("../../assets/profilePictures/tools.png")}
                            style={styles.profileImage}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>{formInput.titulo}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                source={require("../../assets/icons/clock.png")}
                                style={{ width: 20, height: 20, marginLeft: 8 }}
                            />
                            <Text style={styles.infoPost}>{timeAgo(formInput.createdAt)}</Text>
                            <Image
                                source={require("../../assets/icons/pin.png")}
                                style={{ width: 10, height: 14, marginLeft: 8 }}
                            />
                            <Text style={styles.infoPost}>{formInput.cidade}, {formInput.estado}</Text>
                        </View>
                    </View>
                </View>
            </View>
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
        </View>
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
    text: {
        color: "#fff",
        fontSize: 18,
        marginLeft: 10,
        flexWrap: "wrap",
        width: "90%",
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