import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';

const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
             name = "SignIn" 
             component={SignIn}
             options={{headerShown:false}} // não exibir header na tela de SignIn
             />

            <AuthStack.Screen
             name = "SignUp" 
             component={SignUp}
             options ={{
                 headerStyle:{
                     borderBottomWidth: 1, //tamanho da borda abaixo do header
                     borderBottomColor: '#00b94a', //cor da linha abaixo da borda do header
                     backgroundColor: '#fff' //cor de fundo do header
                 },
                 headerTintColor : '#131313', //cor do titulo
                 headerBackTitleVisible: false, //Não exibir o título "original"
                 headerTitle: 'Voltar' // Nome no header
             }}
             />

        </AuthStack.Navigator>
    );
}

export default AuthRoutes;