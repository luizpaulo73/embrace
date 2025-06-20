import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
import BaseScreen from '../../../components/BaseScreen/BaseScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import tiposCampanha from '../../../data/tiposCampanha.json'
import { router } from 'expo-router';

export default function CadastroPost() {
    const [formInput, setFormInput] = useState({
        nome: '',
        titulo: '',
        cep: '',
        cidade: '',
        estado: '',
        latitude: '',
        longitude: '',
        tipoCampanha: '',
        voluntariosCadastrados: 0,
        voluntariosNecessarios: 0,
        createdAt: ''
    });

    async function handleCreatePost() {
        if (!formInput.nome.trim()) {
            alert('Por favor, preencha o nome.');
            return;
        }

        if (!formInput.titulo.trim()) {
            alert('Por favor, preencha o título.');
            return;
        }

        if (!formInput.cep.trim() || formInput.cep.length !== 8) {
            alert('Por favor, insira um CEP válido com 8 dígitos.');
            return;
        }

        if (!formInput.cidade.trim()) {
            alert('Por favor, preencha a cidade.');
            return;
        }

        if (!formInput.estado.trim()) {
            alert('Por favor, preencha o estado.');
            return;
        }

        if (!valueType) {
            alert('Por favor, selecione um tipo de campanha.');
            return;
        }

        if (formInput.voluntariosNecessarios <= 0) {
            alert('Informe um número válido de voluntários necessários.');
            return;
        }

        let data = [];

        if (await AsyncStorage.getItem('posts') != null) {
            data = JSON.parse(await AsyncStorage.getItem('posts') || '[]');
        }

        const postWithDate = {
            ...formInput,
            createdAt: new Date().toISOString(),
            tipoCampanha: valueType
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
            latitude: '',
            longitude: '',
            tipoCampanha: '',
            voluntariosCadastrados: 0,
            voluntariosNecessarios: 0,
            createdAt: ''
        });
        setValueType(null);
    }


    const [valueType, setValueType] = useState(null);
    const [openType, setOpenType] = useState(false);
    const [itemsType, setItemsType] = useState(tiposCampanha);

    async function buscarEnderecoPorCep(cep: string) {
        const cepLimpo = cep.replace(/\D/g, '');

        if (cepLimpo.length !== 8) {
            alert('CEP inválido. Digite 8 números.');
            return;
        }

        try {
            const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cepLimpo}`);
            const data = await response.json();

            if (!data || data?.message === 'CEP não encontrado') {
                alert('CEP não encontrado.');
                return;
            }

            const { city, state, location } = data;

            let latitude = null;
            let longitude = null;

            if (location && Array.isArray(location.coordinates)) {
                [longitude, latitude] = location.coordinates;
            }

            setFormInput((prevState) => ({
                ...prevState,
                cidade: city,
                estado: state,
                latitude: latitude ?? '',
                longitude: longitude ?? '',
            }));
        } catch (error) {
            alert('Erro ao buscar o CEP');
            console.error(error);
        }
    }


    return (
        <BaseScreen platform="maosDadas">
            <View style={{ width: '100%' }}>
                <View style={{ width: '90%', flexDirection: "row", alignItems: "center", gap: 10, height: 50 }}>
                    <TouchableOpacity onPress={() => router.push("/feed")}>
                        <Image source={require("../../../assets/icons/back.png")} style={{width: 20, height: 14, marginTop: 20, marginLeft: 22}}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Novo Post</Text>
                </View>
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
                        onBlur={() => buscarEnderecoPorCep(formInput.cep)}
                        keyboardType="numeric"
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
                        open={openType}
                        value={valueType}
                        items={itemsType}
                        setOpen={setOpenType}
                        setValue={setValueType}
                        setItems={setItemsType}
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
            </View>
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
