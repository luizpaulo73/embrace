import { Text, ScrollView } from "react-native"
import MapViewComponent from "../../components/MapVIewCompoent/MapViewComponent"
import MinimalPost from "../../components/MinimalPost/MinimalPost"
import BaseScreen from "../../components/BaseScreen/BaseScreen"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Mapa() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        const posts = await AsyncStorage.getItem('posts');
        if (posts) {
            setPosts(JSON.parse(posts));
        }
    }

    return (
        <BaseScreen platform="embrace">
            <MapViewComponent posts={posts}/>
            <Text style={{ color: "#fff", fontSize: 20, textAlign: "left", marginTop: 10, width: "90%" }}>Pontos Próximos</Text>
            <ScrollView style={{ width: "100%" }}>
                <MinimalPost posts={posts}/>
            </ScrollView>
        </BaseScreen>
    )
}
