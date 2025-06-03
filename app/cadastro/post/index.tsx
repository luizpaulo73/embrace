import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import BaseScreen from '../../../components/BaseScreen/BaseScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroPost() {

    const [formInput, setFormInput] = useState({
        titulo: '',
        cep: '',
        cidade: '',
        estado: '',
        tipoCampanha: '',
        voluntariosNecessarios: 0
    });

    async function handleCreatePost() {
        let data = [];

        if (await AsyncStorage.getItem('posts') != null) {
            data = JSON.parse(await AsyncStorage.getItem('posts') || '');
        }

        data.push(formInput);
        await AsyncStorage.setItem('posts', JSON.stringify(data));
        alert('Post criado com sucesso!');
        setFormInput({
            titulo: '',
            cep: '',
            cidade: '',
            estado: '',
            tipoCampanha: '',
            voluntariosNecessarios: 0
        });
    }

    return (
        <BaseScreen platform="maosDadas">
            <Text style={styles.title}>Novo Post</Text>
            <View style={styles.form}>
                <Text style={styles.inputLabel}>Título</Text>
                <TextInput
                    style={styles.input}
                    value={formInput.titulo}
                    onChangeText={(text) => setFormInput({ ...formInput, titulo: text })}
                />

                <Text style={styles.inputLabel}>CEP</Text>
                <TextInput
                    style={styles.input}
                    value={formInput.cep}
                    onChangeText={(text) => setFormInput({ ...formInput, cep: text })}
                />

                <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ width: '70%' }}>
                        <Text style={styles.inputLabel}>Cidade</Text>
                        <TextInput
                            style={styles.input}
                            value={formInput.cidade}
                            onChangeText={(text) => setFormInput({ ...formInput, cidade: text })}
                        />
                    </View>
                    <View style={{ width: '30%' }}>
                        <Text style={styles.inputLabel}>Estado</Text>
                        <TextInput
                            style={styles.input}
                            value={formInput.estado}
                            onChangeText={(text) => setFormInput({ ...formInput, estado: text })}
                        />
                    </View> 
                </View>

                <Text style={styles.inputLabel}>Tipo da Campanha</Text>
                <TextInput 
                    style={styles.input}
                    value={formInput.tipoCampanha}
                    onChangeText={(text) => setFormInput({ ...formInput, tipoCampanha: text })}
                />

                <Text style={styles.inputLabel}>Voluntários Necessários</Text>
                <TextInput
                    style={styles.input}
                    value={formInput.voluntariosNecessarios.toString()}
                    onChangeText={(text) => setFormInput({ ...formInput, voluntariosNecessarios: parseInt(text) || 0 })}
                />

                
                
            </View>

            <TouchableOpacity style={styles.button} onPress={handleCreatePost}>
                <Image source={require('../../../assets/icons/help_heart.png')} style={{ width: 24, height: 20 }} />
                <Text style={styles.buttonText}>Criar Post</Text>
            </TouchableOpacity>
        </BaseScreen>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        textAlign: 'left',
        width: '90%',
        marginTop: 20,
        fontWeight: 'bold',
    },
    form: {
        width: '100%',
        backgroundColor: '#262624',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: '#65645F',
        backgroundColor: '#30302E',
        borderWidth: 1,
        paddingHorizontal: 10,
        width: '90%',
        borderRadius: 16,
        color: '#FFFFFF',
        marginTop: 5,
    },
    inputLabel: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'left',
        width: '90%',
        marginTop: 15,
    },
    button: {
        height: 40,
        backgroundColor: '#00BAFF',
        borderRadius: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginLeft: 10,
    }
});
