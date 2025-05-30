import { ScrollView, TouchableOpacity, View, Text, StyleSheet } from "react-native"
import Post from "../../components/Post/Post";
import BaseScreen from "../../components/BaseScreen/BaseScreen";
import { useState } from "react";
import MapViewComponent from "../../components/MapVIewCompoent/MapViewComponent";

export default function Feed() {

    const [selectedTab, setSelectedTab] = useState<boolean>(true);

    const handleTabPress = () => {
        setSelectedTab(!selectedTab);
    }

    return (
        <BaseScreen platform="maosDadas">
             <View style={style.toggleButton}>
                <TouchableOpacity style={[style.tab, {backgroundColor: selectedTab ? "#00BAFF" : "transparent"}]} onPress={handleTabPress}>
                    <Text style={style.tabText}>Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.tab, {backgroundColor: !selectedTab ? "#00BAFF" : "transparent"}]} onPress={handleTabPress}>
                    <Text style={style.tabText}>Mapa</Text>
                </TouchableOpacity>
            </View>
            {selectedTab ? 
                <ScrollView style={{ width: "100%" }}>
                    <Post/>
                </ScrollView> : 
                <MapViewComponent/>
            }
            
            
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
})