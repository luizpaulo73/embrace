import { View, Text } from "react-native"
import CardRecomecar from "../../components/CardRecomecar/CardRecomecar"
import BaseScreen from "../../components/BaseScreen/BaseScreen"

export default function Recomecar() {
    return (
        <BaseScreen platform="recomecar">
            <CardRecomecar />
        </BaseScreen>
    )
}
