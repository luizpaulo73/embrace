import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import BaseScreen from '../../../components/BaseScreen/BaseScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';

export default function CadastroPost() {
    const [formInput, setFormInput] = useState({
        nome: '',
        titulo: '',
        cep: '',
        cidade: '',
        estado: '',
        tipoCampanha: '',
        voluntariosCadastrados: 0,
        voluntariosNecessarios: 0,
        createdAt: ''
    });

    async function handleCreatePost() {
        let data = [];

        if (await AsyncStorage.getItem('posts') != null) {
            data = JSON.parse(await AsyncStorage.getItem('posts') || '[]');
        }

        const postWithDate = {
            ...formInput,
            createdAt: new Date().toISOString(),
        };

        data.push(postWithDate);
        await AsyncStorage.setItem('posts', JSON.stringify(data));

        alert('Post criado com sucesso!');

        setFormInput({
            nome: '',
            titulo: '',
            cep: '',
            cidade: '',
            estado: '',
            tipoCampanha: '',
            voluntariosCadastrados: 0,
            voluntariosNecessarios: 0,
            createdAt: ''
        });
    }

    const [valueMoto, setValueMoto] = useState(null);
    const [openMoto, setOpenMoto] = useState(false);
    const [itemsMoto, setItemsMoto] = useState([
        { label: 'Moto 1', value: 'moto1' },
        { label: 'Moto 2', value: 'moto2' },
        { label: 'Moto 3', value: 'moto3' },
    ]);

    return (
        <BaseScreen platform="maosDadas">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                keyboardVerticalOffset={100}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                >
                    <Text style={styles.title}>Novo Post</Text>

                    <View style={styles.form}>
                        <Text style={styles.inputLabel}>Nome</Text>
                        <TextInput
                            style={styles.input}
                            value={formInput.nome}
                            onChangeText={(text) => setFormInput({ ...formInput, nome: text })}
                        />

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

                        <View style={styles.row}>
                            <View style={{ width: '65%' }}>
                                <Text style={styles.inputLabel}>Cidade</Text>
                                <TextInput
                                    style={styles.input}
                                    value={formInput.cidade}
                                    onChangeText={(text) => setFormInput({ ...formInput, cidade: text })}
                                />
                            </View>
                            <View style={{ width: '40%' }}>
                                <Text style={styles.inputLabel}>Estado</Text>
                                <TextInput
                                    style={styles.input}
                                    value={formInput.estado}
                                    onChangeText={(text) => setFormInput({ ...formInput, estado: text })}
                                />
                            </View>
                        </View>

                        <Text style={styles.inputLabel}>Tipo da Campanha</Text>
                        <DropDownPicker
                            open={openMoto}
                            value={valueMoto}
                            items={itemsMoto}
                            setOpen={setOpenMoto}
                            setValue={setValueMoto}
                            setItems={setItemsMoto}
                            placeholder="Selecione a campanha"
                            style={styles.input}
                            dropDownContainerStyle={styles.dropdownContainer}
                            textStyle={styles.labelDropdown}
                            zIndex={2000}
                        />

                        <Text style={styles.inputLabel}>Voluntários Necessários</Text>
                        <TextInput
                            style={styles.input}
                            value={formInput.voluntariosNecessarios.toString()}
                            keyboardType="numeric"
                            onChangeText={(text) => setFormInput({
                                ...formInput,
                                voluntariosNecessarios: parseInt(text) || 0
                            })}
                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleCreatePost}>
                        <Image source={require('../../../assets/icons/help_heart.png')} style={{ width: 24, height: 20 }} />
                        <Text style={styles.buttonText}>Criar Post</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </BaseScreen>
    );
    }

    const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: 40,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        textAlign: 'left',
        width: '90%',
        marginTop: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
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
        alignSelf: 'center',
    },
    inputLabel: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'left',
        width: '90%',
        marginTop: 15,
        alignSelf: 'center',
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
        alignSelf: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginLeft: 10,
    },
    dropdownContainer: {
        backgroundColor: '#30302E',
        borderColor: '#65645F',
        width: "90%",
        borderWidth: 1,
        alignSelf: 'center',
    },
    labelDropdown: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'left',
        width: '90%',
    },
    row: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});
