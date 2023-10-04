import React from "react";
import { View, Button, TouchableOpacity,ImageBackground, Text, Image } from 'react-native'; // Importe o componente Image corretamente
import AgendarManutencao from "./AgendarManutencao";
import Styles from "./Estilos";
import ContatoOficina from "./ContatoOficina";
import ConsultarAgendamento from "./ConsultarAgendamento";


const TelaPrincipal = ({ navigation }) => {
  const abrirTelaSecundaria = () => {
    navigation.navigate(AgendarManutencao);
  };

  const TelaOficina = () => {
    navigation.navigate(ContatoOficina);
  };

  const TelaAgendamento = () => {
    navigation.navigate(ConsultarAgendamento);
  };

  

  return (
    <ImageBackground
    source={require('../imagens/FundoPreto.png')}
    style={{ flex: 1 }}
>
    <View style={Styles.containerMenu}>
  
 
      <TouchableOpacity
        style={Styles.botao}
        onPress={abrirTelaSecundaria}
      >
        <Text style={Styles.botaoTexto}>AGENDAR MANUTENCAO</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.botao}
        onPress={TelaAgendamento}
      >
        <Text style={Styles.botaoTexto}>ACOMPANHAR MANUTENCAO</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.botao}
        onPress={TelaOficina}
      >
        <Text style={Styles.botaoTexto}>CONTATAR OFICINA</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

export default TelaPrincipal;
