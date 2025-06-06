import { View, Text, StyleSheet } from "react-native"
import CardRecomecar from "../../components/CardRecomecar/CardRecomecar"
import BaseScreen from "../../components/BaseScreen/BaseScreen"
import { Link } from "expo-router"

export default function Recomecar() {
    return (
        <BaseScreen platform="recomecar">
            <CardRecomecar />
            <Link href={"/cadastro/recomeco"} style={style.addButton}>
                <Text style={style.textAdd}>+</Text>
            </Link>
        </BaseScreen>
    )
}

const style = StyleSheet.create({
    addButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        backgroundColor: "#00BAFF",
        borderRadius: 9999,
    },
    textAdd: {
        fontSize: 40,
        color: "#fff",
        fontFamily: "K2D_700Bold",
        textAlign: "center",
        verticalAlign: "middle",
        lineHeight: 60,
    }
});