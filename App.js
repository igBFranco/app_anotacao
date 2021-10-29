import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, Platform } from 'react-native';
import Header from './componentes/Header.js';
import Body from './componentes/Body.js'


export default class App extends React.Component{
   
    constructor(props){
        super(props);
        console.disableYellowBox = true;
        this.plataforma = Platform.OS;
    }


    mostrarConteudo(){

      const nome = "Igor"
    
        return (
          <View style={{marginTop:Constants.statusBarHeight}}>
            <Header></Header>
            <Text>{nome}</Text>
            <Body></Body>
          </View>
        );
    }


    render(){

      return(
        <ScrollView style={{marginTop:20,flex:1}}>
          {
            this.mostrarConteudo()
          }
        </ScrollView>

      );
    }

}

