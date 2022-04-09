import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default class Detalhe extends Component {


  render() {
    let { container, texto } = styles

    return (
      <View style={container}>
        <Text style={texto}>Tela destino da notificação</Text>
      </View>
    )
  }
}

/* Estilização do projeto */
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    fontSize: 30,
    alignSelf:'center',
  }
});