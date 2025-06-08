import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = async (email: string, password: string) => {
    const stored = await AsyncStorage.getItem("usuariosRecomecar");
    if (stored) {
        const usuarios = JSON.parse(stored);
        const usuario = usuarios.find((u: any) => u.email === email && u.senha === password);

        if (usuario) {
            await AsyncStorage.setItem("isLoggedIn", "true");
            await AsyncStorage.setItem("usuarioLogado", JSON.stringify(usuario));
            return true;
        }
    }
    return false;
};


export const logout = async () => {
    await AsyncStorage.removeItem("isLoggedIn");
}

export const checkLogin = async () => {
    const logged = await AsyncStorage.getItem("isLoggedIn");
    return logged === "true";
}