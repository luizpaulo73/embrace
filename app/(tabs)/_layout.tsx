import { Tabs } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

export default function TabsLayout() {
  return (
    <View style={styles.container}>
        <Tabs screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}>
            <Tabs.Screen 
                name="feed"
                options={{
                    title :"Feed",
                    tabBarIcon: ({ focused }) => (
                        <Image
                        source={require('../../assets/tabs/feed.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? '#00BAFF' : '#C2C0B6',}}
                        />
                    ),
                    tabBarLabelStyle: { color: "#C2C0B6", fontSize: 14 }
                }}
            />
            <Tabs.Screen
                name="mapa"
                options={{
                    title :"Mapa", 
                    
                    tabBarIcon: ({ focused }) => (
                        <Image
                        source={require('../../assets/icons/pin.png')}
                        style={{
                            width: 21,
                            height: 30,
                            tintColor: focused ? '#00BAFF' : '#C2C0B6',}}
                        />
                    ),
                    tabBarLabelStyle: { color: "#C2C0B6", fontSize: 14, }
                }}
                />
            <Tabs.Screen
                name="recomecar"
                options={{
                    title :"Recomeçar", 
                    
                    tabBarIcon: ({ focused }) => (
                        <Image
                        source={require('../../assets/tabs/recomecar.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? '#00BAFF' : '#C2C0B6',}}
                        />
                    ),
                    tabBarLabelStyle: { color: "#C2C0B6", fontSize: 14, }
                }}
                />
            <Tabs.Screen
                name="conta"
                options={{
                    title :"Conta", 
                    
                    tabBarIcon: ({ focused }) => (
                        <Image
                        source={require('../../assets/tabs/conta.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? '#00BAFF' : '#C2C0B6',}}
                        />
                    ),
                    tabBarLabelStyle: { color: "#C2C0B6", fontSize: 14 }
                }}
                />
        </Tabs>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#262624",
    },
    tabBar: {
        backgroundColor: "#30302E",
        width: "90%",
        alignSelf: "center",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#65645F",
        height: 70,
        paddingTop: 10,
    },
});