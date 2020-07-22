import React, { Component } from 'react'
import { Text, StyleSheet, View  , TextInput , Image , TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default class LoginScreen extends React.Component {

    state={
        name:""
    }

    continue = () =>{
        this.props.navigation.navigate("Chat" , {name:this.state.name})
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circle}/>
                <View style={{marginTop:64}}>
                <Image source={require("../assets/phone.png")} style={{alignSelf:"center"}} />
                </View>

                <View style={{marginHorizontal:32}}>
                    <Text style={styles.header}>UserName</Text>
                    <TextInput style={styles.input} placeholder="Not your Real Name😊" onChangeText={name =>{this.setState({name});}} value={this.state.name} />

                    <View style={{alignItems:"flex-end" , marginTop:64}}>
                        <TouchableOpacity style={styles.continue} onPress={this.continue}>
                            <Ionicons name="md-arrow-round-forward" size={24} color="#ffffff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f4f5f7",
    },
    circle:{
        width:500,
        height:500,
        borderRadius:250,
        backgroundColor:"#fff",
        position:"absolute",
        left:-120,
        top:-20
    },
    header:{
        fontWeight:"800",
        fontSize:30,
        color:"#514e5a",
        marginTop:32
    },
    input:{
        marginTop:32,
        height:50,
        borderWidth:StyleSheet.hairlineWidth,
        borderRadius:30,
        borderColor:"#bab7c3",
        paddingHorizontal:16,
        color:"#514e5a",
        fontWeight:"600"
    },
    continue:{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:"#9075e3",
        alignItems:"center",
        justifyContent:"center"
    },
})
