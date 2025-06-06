import { View, Text, StyleSheet, FlatList } from "react-native"
import Post from "../../components/Post/Post";
import BaseScreen from "../../components/BaseScreen/BaseScreen";
import { useState, useEffect } from "react";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Feed() {

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
        <BaseScreen platform="maosDadas">
                <View style={{ width: "100%", flex: 1}}>
                    {posts.length === 0 ?
                        <Text style={{ color: "#fff", fontSize: 20, textAlign: "center", marginTop: 20 }}>
                            Nenhum post encontrado
                        </Text> : 
                            <FlatList
                                data={posts}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => <Post formInput={item} />}
                                contentContainerStyle={{ paddingBottom: 20 }}></FlatList>
                    }
                        
                </View>
            
            <Link href={"/cadastro/post"} style={style.addButton}>
                <Text style={style.textAdd}>+</Text>
            </Link>
        </BaseScreen>
    )
}

const style = StyleSheet.create({
    toggleButton: {
        backgroundColor: "#30302E",
        width: "90%",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#65645F",
    },
    tab: {
        padding: 5,
        borderRadius: 11,
        margin: 5,
        width: "45%",
    },
    tabText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        fontFamily: "K2D_700Bold",
    },
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
})