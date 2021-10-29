import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import styleExterno from '../styles.js';

const Body = () => {

        return(
        <View>
            <View style={styles.view}>
                <Image style={styles.image} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar tortor dui, pharetra vulputate ligula laoreet vel. Morbi cursus nec risus ut malesuada. Praesent posuere varius iaculis. Suspendisse in arcu ac nunc tempor molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce auctor euismod rhoncus. Vivamus lobortis lorem a elementum vestibulum. Phasellus non urna pharetra, accumsan justo nec, rhoncus quam. Nulla at urna ut tortor fermentum blandit. Vestibulum pretium pulvinar eros non vehicula. Suspendisse odio elit, rutrum non arcu finibus, suscipit vulputate lectus. Integer vitae arcu vitae mi eleifend lobortis non vitae lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar tortor dui, pharetra vulputate ligula laoreet vel. Morbi cursus nec risus ut malesuada. Praesent posuere varius iaculis. Suspendisse in arcu ac nunc tempor molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce auctor euismod rhoncus. Vivamus lobortis lorem a elementum vestibulum. Phasellus non urna pharetra, accumsan justo nec, rhoncus quam. Nulla at urna ut tortor fermentum blandit. Vestibulum pretium pulvinar eros non vehicula. Suspendisse odio elit, rutrum non arcu finibus, suscipit vulputate lectus. Integer vitae arcu vitae mi eleifend lobortis non vitae lacu</Text>
            </View>

            <View style={styles.view}>
                <Image style={styles.image} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                <Text style={styleExterno.fontStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar tortor dui, pharetra vulputate ligula laoreet vel. Morbi cursus nec risus ut malesuada. Praesent posuere varius iaculis. Suspendisse in arcu ac nunc tempor molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce auctor euismod rhoncus. Vivamus lobortis lorem a elementum vestibulum. Phasellus non urna pharetra, accumsan justo nec, rhoncus quam. Nulla at urna ut tortor fermentum blandit. Vestibulum pretium pulvinar eros non vehicula. Suspendisse odio elit, rutrum non arcu finibus, suscipit vulputate lectus. Integer vitae arcu vitae mi eleifend lobortis non vitae lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar tortor dui, pharetra vulputate ligula laoreet vel. Morbi cursus nec risus ut malesuada. Praesent posuere varius iaculis. Suspendisse in arcu ac nunc tempor molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce auctor euismod rhoncus. Vivamus lobortis lorem a elementum vestibulum. Phasellus non urna pharetra, accumsan justo nec, rhoncus quam. Nulla at urna ut tortor fermentum blandit. Vestibulum pretium pulvinar eros non vehicula. Suspendisse odio elit, rutrum non arcu finibus, suscipit vulputate lectus. Integer vitae arcu vitae mi eleifend lobortis non vitae lacu</Text>
            </View>
        </View>
        );
}

const styles = StyleSheet.create({

    view:{
        flex:1, 
        flexDirection:'row', 
        flexWrap:'wrap',
        padding:30,
    },

    image:{
        width:90, 
        height:90
    },

    text:{
        width:'70%',
        paddingLeft:20, 
        paddingRight:20
    }


});

export default Body;