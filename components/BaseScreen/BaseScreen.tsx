import { StyleSheet, View } from "react-native";
import Header from "../Header/Header";

interface BaseScreenProps {
    children: React.ReactNode;
    platform: string;
}

export default function BaseScreen({ children, platform }: BaseScreenProps) {
    return (
        <View style={styles.container}>
            <Header platform={platform as "embrace" | "maosDadas" | "tempoSeguro" | "recomecar"} />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#262624"
    }
});