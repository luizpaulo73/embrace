import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: "#020817" } }}>
        <Tabs.Screen 
            name="feed"
            options={{
                title :"Feed", 
                
                tabBarIcon: ({ focused }) => (
                    <Image
                      source={require('../../assets/tabs/feed.png')}
                      style={{
                        width: 24,
                        height: 24,
                        tintColor: focused ? '#00CCCF' : '#94A3B8',}}
                    />
                ),
                tabBarLabelStyle: { color: "#94A3B8", fontSize: 10, fontFamily: "K2D_700Bold" }
            }}
        />
        <Tabs.Screen
            name="previsoes"
            options={{
                title :"Previsões", 
                
                tabBarIcon: ({ focused }) => (
                    <Image
                      source={require('../../assets/tabs/previsoes.png')}
                      style={{
                        width: 24,
                        height: 24,
                        tintColor: focused ? '#00CCCF' : '#94A3B8',}}
                    />
                ),
                tabBarLabelStyle: { color: "#94A3B8", fontSize: 10, fontFamily: "K2D_700Bold" }
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
                        width: 24,
                        height: 24,
                        tintColor: focused ? '#00CCCF' : '#94A3B8',}}
                    />
                ),
                tabBarLabelStyle: { color: "#94A3B8", fontSize: 10, fontFamily: "K2D_700Bold" }
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
                        width: 24,
                        height: 24,
                        tintColor: focused ? '#00CCCF' : '#94A3B8',}}
                    />
                ),
                tabBarLabelStyle: { color: "#94A3B8", fontSize: 10, fontFamily: "K2D_700Bold" }
            }}
            />
    </Tabs>
  )
}