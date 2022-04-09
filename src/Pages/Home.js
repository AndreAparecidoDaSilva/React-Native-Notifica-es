import React from 'react'
import {View, Button, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function Home(props)
{
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
        style={styles.imagem}
        source={require('../Imagens/share.jpg')}
      />
            <TouchableOpacity style={styles.button} onPress={ () => props.enviar()}><Text style={styles.textButton}>TESTAR NOTIFICAÇÃO</Text></TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
  
    },
    buttons: {
      marginTop:hp('25%'),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    button: {
      height: hp('5%'),
      width: wp('45%'),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'red'
    },
    imagem:{
      marginBottom:hp('23%'),
      width: wp('100%'),
      height:hp('20%')
    },
    texto: {
      color:'#00a8ff',
      fontSize:hp('3.5%'),
    },
    textButton: {
      color: '#fff',
      fontSize:hp('2%'),
      fontWeight:'bold'
    }
  })