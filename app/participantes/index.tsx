import { Linking, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import BaseScreen from '../../components/BaseScreen/BaseScreen';
import CardParticipante from '../../components/CardParticipante/CardParticipante';
import dados from "../../data/participantes.json";
import { router } from 'expo-router';

export default function Participantes() {

    const abrirLink = (url: string) => {
        Linking.openURL(url)
    };   

    return (
        <BaseScreen platform='embrace'>
            <TouchableOpacity onPress={() => router.push("/conta")} style={{width: "90%", flexDirection: "row", alignItems: "center", gap: 10}}>
                <Image source={require("../../assets/icons/back.png")} style={{width: 20, height: 14}}/>
                <Text style={{fontSize: 16, color: "#ffffff"}}>Voltar</Text>
            </TouchableOpacity>
            {dados.map((dado, index) => (
                <CardParticipante dados={dado} key={index} />
            ))}
            <TouchableOpacity onPress={() => abrirLink("https://github.com/luizpaulo73/embrace")} style={styles.btnLogin}>
                <Text style={styles.btnLoginText}>Repositório</Text>
            </TouchableOpacity>
        </BaseScreen>  
    )
}

const styles = StyleSheet.create({
    btnLogin: {
        backgroundColor: "#00BAFF",
        borderRadius: 5,
        width: "50%",
        height: 40,
        marginTop: 40
    },
    btnLoginText: {
        flex: 1,
        color: "#ffffff",
        fontSize: 20,
        textAlign: "center",
        textAlignVertical: "center",
    }
})