import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './componentes/TelaLogin'; // Importe o componente TelaLogin corretamente
import TelaPrincipal from './componentes/TelaPrincipal'; // Importe o componente TelaPrincipal corretamente
import AgendarManutencao from './componentes/AgendarManutencao';
import ConsultarAgendamento from './componentes/ConsultarAgendamento';
import ContatoOficina from './componentes/ContatoOficina';
import Mecanico from './componentes/TelaMecanico';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TelaLogin} options={{ title: "Welcome" }} />
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{ title: "Menu" }} />
        <Stack.Screen name="AgendarManutencao" component={AgendarManutencao} options={{ title: "Agendamento" }} />
        <Stack.Screen name="ConsultarAgendamento" component={ConsultarAgendamento} options={{ title: "Consultar Agendametno" }} />
        <Stack.Screen name="ContatoOficina" component={ContatoOficina} options={{ title: "Contato Oficina" }} />
        <Stack.Screen name="Mecanico" component={Mecanico} options={{ title: "Mecanico" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;