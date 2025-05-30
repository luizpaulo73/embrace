import { View, Text, StyleSheet } from 'react-native'

export default function ProgressBar() {
    return (
        <View style={styles.container}>
            <View style={[styles.progressBar, { backgroundColor: '#65645F', marginTop: 5, }]}>
                <View style={[styles.progressBar, { backgroundColor: '#00BAFF', width: '48%' }]} />
            </View>
            <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <Text style={styles.infoProgress}>24/50 Voluntários</Text>
                <Text style={styles.infoProgress}>48%</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    progressBar: {
        height: 10,
        width: '100%',
        borderRadius: 9999,
    },
    infoProgress: {
        color: '#ffffff',
        marginLeft: 5,
        fontSize: 12,
    }
});