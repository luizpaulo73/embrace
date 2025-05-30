import { StyleSheet, View } from "react-native";

interface BaseScreenProps {
    children: React.ReactNode; 
}

export default function BaseScreen({ children }: BaseScreenProps) {
    return (
        <View style={styles.container}>
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