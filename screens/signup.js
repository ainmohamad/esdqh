import React from 'react';
import {
  Image,
  Button,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import * as firebase from 'firebase';


  var firebaseConfig = {
    apiKey: "AIzaSyBf8UFNAWWzD6F6qMMI8GWJpFTpFCSLabU",
    authDomain: "sadaqah-project.firebaseapp.com",
    databaseURL: "https://sadaqah-project.firebaseio.com",
    projectId: "sadaqah-project",
    storageBucket: "sadaqah-project.appspot.com",
    messagingSenderId: "1002641134472",
    appId: "1:1002641134472:web:971502fb23f30b9d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default class signup extends React.Component{
    render(){
        return(
            <View style={styles.regform}>
                <Text style={styles.heaader}>Sign Up</Text>
                <TextInput style={styles.textinput} placeholder="Fullname" underlineColorAndroid={'transparent'}/>
                <TextInput style={styles.textinput} placeholder="Matric Number" underlineColorAndroid={'transparent'}/>
                <TextInput style={styles.textinput} placeholder="Email" underlineColorAndroid={'transparent'}/>
                <TextInput style={styles.textinput} placeholder="Password" underlineColorAndroid={'transparent'}/>
                <TextInput style={styles.textinput} placeholder="Fullname" underlineColorAndroid={'transparent'}/>




            </View>
        );
    }
}

const styles = StyleSheet.create({
    regform: {
        alignSelf: 'stretch',
    },
    heaader: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    }
  });
  