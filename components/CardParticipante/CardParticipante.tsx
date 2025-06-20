import { StyleSheet, View, Text, Image, Linking, TouchableOpacity } from "react-native";

type tipoParticipantes = {
    nome: string;
    rm: string;
    linkedin: string;
    github: string;
    foto: string;
};

type CardParticipanteProps = {
    dados: tipoParticipantes;
};

export default function CardParticipante({dados} : CardParticipanteProps) {

    const abrirLink = (url: string) => {
        Linking.openURL(url)
    };

    return (
         <View style={styles.card}>
            <View style={{width: "60%"}}>
                <Text style={styles.infos}>{dados.nome}</Text>
                <View style={styles.viewRMRedes}>
                    <Text style={styles.infoRm}>RM {dados.rm}</Text>
                    <View style={{flexDirection: "row", gap: 10}}>
                        <TouchableOpacity onPress={() => abrirLink(dados.linkedin)}>
                            <Image style={styles.image} source={require('../../assets/redes/linkedin.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => abrirLink(dados.github)}>
                            <Image style={styles.image} source={require('../../assets/redes/github.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {dados.foto === "enzo.jpg" ? <Image style={styles.imgParticipante} source={require(`../../assets/participantes/enzo.jpg`)}/> : <></>}
            {dados.foto === "luiz.jpg" ? <Image style={styles.imgParticipante} source={require(`../../assets/participantes/luiz.jpg`)}/> : <></>}
            {dados.foto === "rafael.jpg" ? <Image style={styles.imgParticipante} source={require(`../../assets/participantes/rafael.jpg`)}/> : <></>}
            
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#30302E",
        width: "90%",
        height: 150,
        borderRadius: 12,
        paddingLeft: 10,
        marginTop: 10,
        borderTopWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderLeftWidth: 5,
        borderRightColor: "#65645F",
        borderBottomColor: "#65645F",
        borderTopColor: "#65645F",
        borderLeftColor: "#00BAFF",
        alignItems: "center",
        flexDirection: "row"
    },
    infos: {
        fontSize: 18,
        color: "#fff",
    },
    image: {
        width: 30,
        height: 30
    },
    viewRMRedes: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    infoRm: {
        color: "#C2C0B6",
        fontSize: 16,
        paddingLeft: 5
    },
    imgParticipante: {
        width: 125,
        height: 125,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#00BAFF",
    }
})