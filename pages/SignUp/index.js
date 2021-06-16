import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';

import { AuthContext } from '../../src/contexts/auth';


import { Background, Container, AreaInput, Input, Logo, SubmitButton, SubmitText } from '../SignIn/styles';

export default function SignIn() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useContext(AuthContext);
  
  function handleSignUp(){
    signUp(email, password, nome);
  }

  return (
    <Background>
      <Container
      behavior = {Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >
        <Logo source={require('../../assets/SignUp.png')} />

        <AreaInput>
          <Input
            placeholder="Nome" //texto de fundo do campo imput
            autocorrect={false} //não dar opção de correção no teclado
            autoCapitalize="none" //Não iniciar com letra maiuscula automaticamente
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha" //texto de fundo do campo imput
            autocorrect={false} //não dar opção de correção no teclado
            autoCapitalize="none" //Não iniciar com letra maiuscula automaticamente
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email" //texto de fundo do campo imput
            autocorrect={false} //não dar opção de correção no teclado
            autoCapitalize="none" //Não iniciar com letra maiuscula automaticamente
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

    

      </Container>
    </Background>
  );
}

