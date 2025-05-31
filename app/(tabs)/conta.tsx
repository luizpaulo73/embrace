import { Link } from "expo-router"
import { View, Text } from "react-native"

export default function Conta() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#262624" }}>
            <View>
                <Text>Conta Screen</Text>
                <Link href="/cadastro">dsfsdf</Link>
            </View>
        </View>
    )
}
