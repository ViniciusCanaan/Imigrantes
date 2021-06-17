import React, {useState, createContext} from 'react';
import firebase from '../services/firebaseConnection';
//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage'


export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);

    //Função para logar o usuário
    async function signIn(email, password){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async(value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot)=>{
                let data ={
                    uid: uid,
                    nome: snapshot.val().nome,
                    email: value.user.email,
                };

                setUser(data);
                storageUser(data);
            })
        })
        .catch((error)=>{
            alert(error.code);
        });
    }


    //Cadastrar usuário
    async function signUp(email, password, nome) {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    saldo: 0,
                    nome: nome

                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email
                        };
                        setUser(data);
                        storageUser(data);
                    })
            })
            .catch((error) => {
                alert(error.code);
            });
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn}}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthProvider;