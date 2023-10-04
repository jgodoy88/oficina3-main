import React, { useState } from 'react';
import Styles from './Estilos';
import { View,ImageBackground, TextInput,Text,Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {Image } from 'react-native';



const AgendarManutencao = () => {
  const [cpf, setCpf] = useState('');
  const [unidade, setUnidade] = useState('');




  return (
    <ImageBackground
    source={require('../imagens/FundoPreto.png')}
    style={{ flex: 1 }}
>

       <View style = {Styles.container}>

      <TextInput
        style={Styles.inputAgendamento}
        placeholder='Número do CPF'
        placeholderTextColor='white'
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />

      <TextInput
        style={Styles.inputAgendamento}
        placeholder='Número da unidade'
        placeholderTextColor='white'
        value={unidade}
        onChangeText={(text) => setUnidade(text)}
      />


      </View>
    </ImageBackground>
  );
};

export default AgendarManutencao;



