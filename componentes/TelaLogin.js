import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, TextInput, ImageBackground } from 'react-native';
import Styles from "./Estilos";
import Mecanico from "./TelaMecanico";

const TelaLogin = ({ navigation }) => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const abrirTelaPrincipal = () => {

        if (login === 'godoy' && senha === 'godoy') {

            navigation.navigate('TelaPrincipal');
        }
        
        else if(login === 'mecanica' && senha === 'mecanica'){
           navigation.navigate('Mecanico');
        }
        
        else {

            alert('Login ou senha incorretos');
        }
    };

    return (
        <ImageBackground
            source={require('../imagens/FundoPreto.png')}
            style={{ flex: 1 }}
        >
            <View style={Styles.container}>
                <View style={Styles.ViewLogin}>
                    <TextInput
                        style={Styles.InputLogin}
                        placeholder='Login'
                        placeholderTextColor='white'
                        value={login}
                        onChangeText={(text) => setLogin(text)}
                    />

                    <TextInput
                        style={Styles.InputSenha}
                        placeholder='Senha'
                        placeholderTextColor='white'
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                    />

                    <TouchableOpacity style={Styles.botaoLogin} onPress={() => abrirTelaPrincipal() + console.log('click botao')}>
                        <Text style={Styles.botaoTexto}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default TelaLogin;
