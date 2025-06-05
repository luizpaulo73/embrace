import { Text, ScrollView } from "react-native"
import MapViewComponent from "../../components/MapVIewCompoent/MapViewComponent"
import MinimalPost from "../../components/MinimalPost/MinimalPost"
import BaseScreen from "../../components/BaseScreen/BaseScreen"

export default function Previsoes() {
    return (
        <BaseScreen platform="embrace">
            <MapViewComponent/>
            <Text style={{ color: "#fff", fontSize: 20, textAlign: "left", marginTop: 10, width: "90%" }}>Pontos Próximos</Text>
            <ScrollView style={{ width: "100%" }}>
                <MinimalPost />
            </ScrollView>
        </BaseScreen>
    )
}
