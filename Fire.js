import firebase from "firebase";
import { SnapshotViewIOS } from "react-native";

class Fire{
    constructor(){
        this.init()
        this.checkAuth()
    }

    init = () =>{
        if(!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyCGSirRTR4Q67ebiisZv-wE-86ayklmgQI",
                authDomain: "reg-form-7bcf8.firebaseapp.com",
                databaseURL: "https://reg-form-7bcf8.firebaseio.com",
                projectId: "reg-form-7bcf8",
                storageBucket: "reg-form-7bcf8.appspot.com",
                messagingSenderId: "721568115027",
                appId: "1:721568115027:web:3780e1b55f8bdd065359a6",
                measurementId: "G-WX0VLRF8Y6"
            })
        }
    };

    checkAuth = () =>{
        firebase.auth().onAuthStateChanged(user =>{
            if(!user){
                firebase.auth().signInAnonymously();
            }
        })
    };

    send = messages =>{
        messages.forEach(item =>{
            const message ={
                text:item.text,
                timestamp:firebase.database.ServerValue.TIMESTAMP,
                user:item.user
            }

            this.db.push(message)
        })
    };

    parse = message =>{
        const {user , text , timestamp} = messages.val()
        const {key:_id} = message
        const createdAt = new Date(timestamp);

        return{
            _id,
            createdAt,
            text,
            user
        }
    };

    get = callback =>{
        this.db.on("child_added" , snapshot => callback(this.parse(snapshot)));
    };

    off(){
        this.db.off();
    }

    get db(){
        return firebase.database().ref("messages");
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid;
    }
}

export default new Fire();