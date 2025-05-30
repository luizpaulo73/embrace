import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import darkMapStyle from '../../data/mapConfig.json';

export default function MapViewComponent() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                customMapStyle={darkMapStyle}
                initialRegion={{
                    latitude: -23.55052,
                    longitude: -46.633308,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: "30%",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#65645F",
        overflow: "hidden",
        marginTop: 10,
    },
    map: {
        width: "100%",
        height: "100%",
    },
});
