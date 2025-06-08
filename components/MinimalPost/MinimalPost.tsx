import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

interface FormInput {
    nome: string;
    titulo: string;
    cidade: string;
    estado: string;
}

export default function MinimalPost({posts}: { posts: FormInput[] }) {
    return (
        <View>
            {posts.map((post, index) => (
                <View style={styles.container} key={index}>
                    <Text style={styles.name}>{post.nome}</Text>
                    <Text style={styles.title}>{post.titulo}</Text>
                    <Text style={styles.desc}>{post.cidade}, {post.estado.toUpperCase()}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../../assets/icons/help_heart.png')} style={{ width: 24, height: 20, tintColor: "#fff" }} />
                        <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>Quero Ajudar</Text>
                    </TouchableOpacity>
                </View>
            ))}
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
    name: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold"
    },
    title: {
        color: "#ffffff",
        fontSize: 14
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