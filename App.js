import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { notificationManager } from './src/NotificationManager';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Pages/Home';
import Detalhe from './src/Pages/Detalhe';

const notificador = notificationManager;
const Stack = createStackNavigator();
export default class App extends Component {


  componentDidMount() {
    notificador.configure()
    notificador.createChannel()
    notificador.agendarNotificacoes()
  }

  onPressSendNotification = () => {
    notificador.showNotification(
      1,
      "Teste de notificação!",
      "Se você está lendo esta mensagem é sinal de que as notificações estão funcionando normalmente.",
      {}, // data
      {} // options
    )
  }

  onPressCancelAllLocalNotification = () => {
    notificador.cancelAllLocalNotification()
  }

  render() {


    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {
              ({ navigation }) => {
                notificador.setNavegador(navigation); return ( <Home enviar={this.onPressSendNotification} cancelar={this.onPressCancelAllLocalNotification} /> )}
            }
          </Stack.Screen>

          <Stack.Screen name="Detalhe">
            {({ navigation }) => { return (<Detalhe />) }}

          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}