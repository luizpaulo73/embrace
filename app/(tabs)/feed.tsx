import { View, Text, ScrollView } from "react-native"
import Post from "../../components/Post/Post";

export default function Feed() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#262624" }}>
            <ScrollView style={{ width: "100%" }}>
                <Post/>
            </ScrollView>
        </View>
    )
}
