import React, { Component } from 'react'
import {Platform , KeyboardAvoidingView , SafeAreaView  } from 'react-native'
import Fire from '../Fire'
import { Message, GiftedChat } from 'react-native-gifted-chat'

export default class ChatScreen extends React.Component {

    state={
        mesages:[]
    }

    get user(){
        return{
            _id:Fire.uid,
            name:this.props.navigation.state.params.name
        }
    }
    componentDidMount(){
        Fire.get(message => this.setState(pervious => ({
            messages:GiftedChat.append(pervious.message , message)
        })));
    }

    UNSAFE_componentWillMount(){
        Fire.off();
    }

    render() {
        const chat = <GiftedChat message={this.state.mesages} onSend={Fire.send} user={this.user} />

        if(Platform.OS === 'android'){
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={30}>
                {chat}
            </KeyboardAvoidingView>
        }

    return <SafeAreaView style={{flex:1}}>{chat}</SafeAreaView>
    }
}


