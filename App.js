import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, Platform, TouchableOpacity } from 'react-native';
import Header from './componentes/Header.js';
import Body from './componentes/Body.js'


export default function App(){

    
   
    const [estado, setarEstado] = useState('leitura');
    const [anotacao, setarAnotacao] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id libero in neque cursus ullamcorper id et quam. Donec volutpat ipsum et vestibulum facilisis. Etiam ut urna id neque vulputate egestas sed a enim. Curabitur sed pretium dui. Maecenas tortor risus, pretium id posuere non, porta eget elit. Nullam pretium, est egestas venenatis suscipit, orci tortor efficitur lacus, et vestibulum lectus magna nec sem. Aliquam gravida ullamcorper dui in porta.');

    if(estado == 'leitura'){
      return(
        <View style={{flex:1}}>  
          <StatusBar style="light"></StatusBar>
            <View style={styles.header}><Text style={{textAlign: 'center', color:'white', fontSize:18}}>Aplicativo Anotação</Text></View>
          
          <View style={{padding:20}}><Text style={styles.anotacao}>{anotacao}</Text></View>

          <TouchableOpacity onPress={()=> setarEstado('atualizando')} style={styles.btnAnotacao}><Text style={styles.btnAnotacaoTexto}>+</Text></TouchableOpacity>
        </View>
      )
    }else if(estado == 'atualizando'){
      return(
      <View style={{flex:1}}>  
        <StatusBar style="light"></StatusBar>
          <View style={styles.header}><Text style={{textAlign: 'center', color:'white', fontSize:18}}>Aplicativo Anotação</Text></View>
        


        <TouchableOpacity onPress={()=> setarEstado('leitura')} style={styles.btnSalvar}><Text style={{textAlign:'center', color:'white'}}>Salvar</Text></TouchableOpacity>
      </View>
      );
    }
  

}

const styles = StyleSheet.create({
    header:{
      width: '100%',
      padding: 20,
      backgroundColor:'#069'
    },
    anotacao:{
      fontSize:13
    },
    btnAnotacao:{
      position: 'absolute',
      right:20,
      bottom:20,
      width:50,
      height:50,
      backgroundColor:'#069',
      borderRadius:25,
    },
    btnAnotacaoTexto:{
      color:'white',
      position:'relative',
      textAlign:'center',
      top:3,
      fontSize:30
    },
    btnSalvar:{
      position: 'absolute',
      right:20,
      bottom:20,
      width:100,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#069',
      borderRadius:10
    },
});

