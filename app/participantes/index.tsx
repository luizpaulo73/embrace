import { Linking, TouchableOpacity, Text, StyleSheet } from 'react-native';
import BaseScreen from '../../components/BaseScreen/BaseScreen';
import CardParticipante from '../../components/CardParticipante/CardParticipante';
import dados from "../../data/participantes.json";

export default function Participantes() {

    const abrirLink = (url: string) => {
        Linking.openURL(url)
    };   

    return (
        <BaseScreen platform='embrace'>
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
        fontFamily: "K2D_700Bold",
        textAlignVertical: "center",
    }
})