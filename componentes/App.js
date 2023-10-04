
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TelaPrincipal from './components/TelaPrincipal';
import AgendarManutencao from './components/AgendarManutencao';
import Styles from './components/Estilos';
import ContatoOficina from './components/ContatoOficina';
import ConsultarAgendamento from './components/ConsultarAgendamento';
import TelaLogin from './components/TelaLogin';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">
        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
          options={{
            headerStyle: Styles.container,
            headerTitleStyle: { color: 'black' },
          }}
        />
        <Stack.Screen
          name="TelaPrincipal"
          component={TelaPrincipal}
          options={{
            headerStyle: { backgroundColor: 'white' },
            headerTitleStyle: { color: 'black' },
          }}
        />
        <Stack.Screen name="AgendarManutencao" component={AgendarManutencao} />
        <Stack.Screen name="ContatoOficina" component={ContatoOficina} />
        <Stack.Screen
          name="ConsultarAgendamento"
          component={ConsultarAgendamento}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default createAppContainer(App);
