import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function MinimalPost() {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Título do Post</Text>
                <Text style={styles.desc}>Descrição breve do post. Este é um exemplo de texto que pode ser substituído.</Text>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/icons/help_heart.png')} style={{ width: 24, height: 20, tintColor: "#fff" }} />
                    <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>Mostrar no Mapa</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: "#30302E",
        borderRadius: 16,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#65645F",
        alignSelf: "center",
        padding: 10
    },
    title: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold"
    },
    desc: {
        color: "#C2C0B6",
        fontSize: 14,
        marginTop: 5
    },
    button: {
        flexDirection: "row",
        backgroundColor: "#00BAFF",
        padding: 5,
        borderRadius: 9999,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    }
});