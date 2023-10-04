import React from 'react';
import Styles from './Estilos';
import { View, } from 'react-native';
import {Image } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';

const ContatoOficina = () =>{
    return(
      <ImageBackground
      source={require('../imagens/FundoPreto.png')}
      style={{ flex: 1 }}
  >

      <View style={Styles.ViewContato} >
      <TouchableOpacity
        style={Styles.botao}
        onPress={console.log("botao apertado")}>
          <Text style = {Styles.botaoTexto}>CHAMADO WHATSAPP</Text>
      </TouchableOpacity>

      <Image source={require("../imagens/333.png")} style={Styles.oficinaLogo}/>

      <TouchableOpacity
        style={Styles.botao}
        onPress={console.log("botao apertado")}>
            <Text  style = {Styles.botaoTexto}>CHAMADO TELEFONICO</Text>
      </TouchableOpacity>
      </View>


      </ImageBackground>
    )
};

export default ContatoOficina;
