import { View, Text, StyleSheet, FlatList } from "react-native"
import CardRecomecar from "../../components/CardRecomecar/CardRecomecar"
import BaseScreen from "../../components/BaseScreen/BaseScreen"
import { Link } from "expo-router"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Recomecar() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        const posts = await AsyncStorage.getItem('postsRecomecar');
        if (posts) {
            setPosts(JSON.parse(posts));
        }
    }

    return (
        <BaseScreen platform="recomecar">
            <View style={{ width: "100%", flex: 1}}>
                {posts.length === 0 ?
                    <Text style={{ color: "#fff", fontSize: 20, textAlign: "center", marginTop: 20 }}>
                        Nenhum post encontrado
                    </Text> : 
                        <FlatList
                            data={posts}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => <CardRecomecar formInput={item} />}
                            contentContainerStyle={{ paddingBottom: 20 }}></FlatList>
                }
                    
            </View>
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
        textAlign: "center",
        verticalAlign: "middle",
        lineHeight: 60,
    }
});