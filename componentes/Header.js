import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {

        return(
            <View style={styles.view}>
                <Text style={styles.textStyle}>Primeiro App</Text>
            </View>
        );

}

const styles = StyleSheet.create({

    view:{
        backgroundColor:'rgb(85,50,168)', 
        padding:20, 
        width:'100%',
    },

    textStyle:{
        textAlign:'center', 
        fontSize:30, 
        color:'white'
    }

});

export default Header;