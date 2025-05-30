import { ScrollView } from "react-native"
import Post from "../../components/Post/Post";
import BaseScreen from "../../components/BaseScreen/BaseScreen";

export default function Feed() {
    return (
        <BaseScreen>
            <ScrollView style={{ width: "100%" }}>
                <Post/>
            </ScrollView>
        </BaseScreen>
    )
}
