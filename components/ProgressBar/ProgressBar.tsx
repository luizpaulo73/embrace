import { View, Text, StyleSheet } from 'react-native'

interface ProgressBarProps {
    cadastrados: number;
    necessarios: number;
}

export default function ProgressBar({ cadastrados, necessarios }: ProgressBarProps ) {
    return (
        <View style={styles.container}>
            <View style={[styles.progressBar, { backgroundColor: '#65645F', marginTop: 5, }]}>
                <View style={[styles.progressBar, { backgroundColor: '#00BAFF', width: `${Math.min(100, (cadastrados / necessarios) * 100)}%` }]} />
            </View>
            <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <Text style={styles.infoProgress}>{cadastrados}/{necessarios} Voluntários</Text>
                <Text style={styles.infoProgress}>{Math.round((cadastrados / necessarios) * 100)}%</Text>
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