import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = async (email: string, password: string) => {
    if (email === "user" && password === "password") {
        await AsyncStorage.setItem("isLoggedIn", "true");
        return true;
    }
    return false;
}

export const logout = async () => {
    await AsyncStorage.removeItem("isLoggedIn");
}

export const isLoggedIn = async () => {
    const value = await AsyncStorage.getItem("isLoggedIn");
    return value === "true";
}