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
        titulo: '',
        cep: '',
        cidade: '',
        estado: '',
        tipoCampanha: '',
        createdAt: ''
    });


    async function handleCreatePost() {

        if (!formInput.titulo.trim()) {
            alert('Preencha o título.');
            return;
        }

        const cepLimpo = formInput.cep.replace(/\D/g, '');
        if (!cepLimpo || cepLimpo.length !== 8) {
            alert('Preencha um CEP válido com 8 números.');
            return;
        }

        if (!formInput.cidade.trim()) {
            alert('Preencha a cidade.');
            return;
        }

        if (!formInput.estado.trim()) {
            alert('Preencha o estado.');
            return;
        }

        if (!formInput.tipoCampanha) {
            alert('Selecione o tipo da campanha.');
            return;
        }

        try {
            let data = [];

            const stored = await AsyncStorage.getItem('postsRecomecar');
            if (stored) {
                data = JSON.parse(stored);
            }

            const postWithDate = {
                ...formInput,
                createdAt: new Date().toISOString(),
            };

            data.push(postWithDate);
            await AsyncStorage.setItem('postsRecomecar', JSON.stringify(data));

            alert('Post criado com sucesso!');

            setFormInput({
                titulo: '',
                cep: '',
                cidade: '',
                estado: '',
                tipoCampanha: '',
                createdAt: ''
            });
            setValueType(null);

        } catch (error) {
            alert('Erro ao salvar o post.');
            console.error(error);
        }
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
            const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
            const data = await response.json();

            if (data.erro) {
                alert('CEP não encontrado.');
                return;
            }

            setFormInput((prevState) => ({
                ...prevState,
                cidade: data.localidade,
                estado: data.uf,
            }));
        } catch (error) {
            alert('Erro ao buscar o CEP');
            console.error(error);
        }
    }

    return (
        <BaseScreen platform="recomecar">
            <View style={{ width: '100%' }}>
                <View style={{ width: '90%', flexDirection: "row", alignItems: "center", gap: 10, height: 50 }}>
                    <TouchableOpacity onPress={() => router.push("/recomecar")}>
                        <Image source={require("../../../assets/icons/back.png")} style={{width: 20, height: 14, marginTop: 20, marginLeft: 22}}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Novo Post Recomeçar</Text>
                </View>
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
