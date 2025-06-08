import { View, StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import darkMapStyle from '../../data/mapConfig.json';
import coordsMock from '../../data/coordsMock.json';

interface FormInput {
    titulo: string;
    cidade: string;
    estado: string;
}

export default function MapViewComponent({posts}: { posts: FormInput[] }) {
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
            >
                {posts.map((post, index) => {
                    const coords = coordsMock[index];

                    if (!coords) return null;

                    return (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: coords.latitude,
                                longitude: coords.longitude,
                            }}
                            title={post.titulo}
                            description={`${post.cidade}, ${post.estado.toUpperCase()}`}>
                        </Marker>
                    );
                })}

            </MapView>
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
