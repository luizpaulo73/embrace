import { View, Image, StyleSheet, Text } from 'react-native'

const platforms = {
    embrace: {
        title: "Embrace",
        logo: require("../../assets/logos/logo_embrace.png"),
    },
    maosDadas: {
        title: "Mãos Dadas",
        logo: require("../../assets/logos/logo_maos_dadas.png"),
    },
    tempoSeguro: {
        title: "Tempo Seguro",
        logo: require("../../assets/logos/logo_tempo_seguro.png"),
    }
} as const;

type PlatformKey = keyof typeof platforms;

export default function Header( { platform }: { platform: PlatformKey } ) {
  return (
    <View style={styles.container}>
        <Image
        source={platforms[platform].logo}
        style={{ width: 80, height: 80 }}
        />
        <Text style={styles.title}>{platforms[platform].title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
    },
    title: {
        color: "#ffffff",
        fontSize: 18,
    }
});