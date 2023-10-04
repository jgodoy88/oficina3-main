import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import TarefaDetalhe from './TarefaDetalhe';
import { Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  tarefaBox: {
    flexDirection: 'row', // Para alinhar o botão à direita da tarefa
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    alignItems: 'center', // Para centralizar verticalmente o texto e o botão
    justifyContent: 'space-between', // Para distribuir o espaço entre o texto e o botão
  },
  botaoAceitar: {
    backgroundColor: 'green', // Cor de fundo do botão de aceitação
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  textoBotao: {
    color: 'white', // Cor do texto do botão
    fontWeight: 'bold',
  },
});

// Função simulada para buscar tarefas de uma fonte de dados externa
const buscarTarefas = async () => {
  // Simula uma solicitação para obter as tarefas do banco de dados ou de outra fonte
  // Aqui, retornamos um array de tarefas simulado
  return [
    { nome: 'Tarefa 1', detalhes: 'Detalhes da Tarefa 1', expandida: false },
    { nome: 'Tarefa 2', detalhes: 'Detalhes da Tarefa 2', expandida: false },
    // Adicione outras tarefas aqui
  ];
};

function Mecanico() {
  const [ordens, setOrdens] = useState([]);

  useEffect(() => {
    async function carregarTarefas() {
      try {
        const tarefas = await buscarTarefas(); // Chama a função de busca de tarefas
        setOrdens(tarefas); // Atualiza o estado com as tarefas obtidas
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    }

    carregarTarefas(); // Chama a função de busca de tarefas quando o componente é montado
  }, []); // O array vazio [] como segundo argumento faz com que este efeito seja executado apenas uma vez, quando o componente é montado

  const aceitarTarefa = (index) => {
    // Implemente aqui a lógica para aceitar a tarefa com base no índice
    // Por exemplo, você pode atualizar o estado da tarefa como "aceita"
  };

  return (
    <ScrollView style={styles.container}>
    {ordens.map((tarefa, index) => (
      <View key={index} style={styles.tarefaBox}>
        <TarefaDetalhe tarefa={tarefa} expandir={expandida => {
          const novasOrdens = [...ordens];
          novasOrdens[index].expandida = expandida;
          setOrdens(novasOrdens);
        }} />
        <Button
          title="Aceitar"
          onPress={() => aceitarTarefa(index)}
          style={styles.botaoAceitar}
        />
      </View>
    ))}
  </ScrollView>
  );
}

export default Mecanico;
