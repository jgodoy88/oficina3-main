import React from 'react';
import { View, Text } from 'react-native';

function TarefaDetalhe({ tarefa, expandir }) {
  return (
    <View>
      <Text onPress={() => expandir(!tarefa.expandida)}>{tarefa.nome}</Text>
      {tarefa.expandida && (
        <View>
          <Text>Detalhes da Tarefa:</Text>
          <Text>{tarefa.detalhes}</Text>
          {/* Adicione outros detalhes da tarefa aqui */}
        </View>
      )}
    </View>
  );
}

export default TarefaDetalhe;
