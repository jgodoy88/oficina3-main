import React, { useState } from 'react';
import Styles from './Estilos';
import { View, TextInput, ImageBackground, Text, TouchableOpacity } from 'react-native';

const ConsultarAgendamento = () => {
  const [cpf, setCpf] = useState('');
  const [consultaResultado, setConsultaResultado] = useState(''); // Estado para armazenar o resultado da consulta

  const handleConsulta = () => {
    if(cpf === 'a'){
      const status = 'Em Manutenção'
      setConsultaResultado("O STATUS DA MANUTENÇÃO É:  " + status);
    }else{
      setConsultaResultado("ordem nao encontrada")
    }

    
  };

  return (
    <ImageBackground
      source={require('../imagens/FundoPreto.png')}
      style={{ flex: 1 }}
    >
      <View style={Styles.ContainerConsulta}>
        <View style={Styles.ViewConsulta}>
          <TextInput
            style={Styles.inputConsulta}
            placeholder="Número do CPF"
            value={cpf}
            onChangeText={(text) => setCpf(text)}
          />

          <TouchableOpacity style={Styles.botaoResultado} onPress={handleConsulta}>
            <Text style={Styles.botaoTexto}>CONSULTAR</Text>
          </TouchableOpacity>
          
        </View>
         {/* Exibir o resultado da consulta */}
         {consultaResultado !== '' && (
            <View style={Styles.ViewResultado}>
               <Text style={Styles.resultadoConsulta}>{consultaResultado}</Text>
            </View>
           
          )}
      </View>
    </ImageBackground>
  );
};

export default ConsultarAgendamento;

