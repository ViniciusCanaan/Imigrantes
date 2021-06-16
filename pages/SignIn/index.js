import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../src/contexts/auth';

import { Background, Container, AreaInput, Input, Logo, SubmitButton, SubmitText, Link, LinkText } from './styles';

export default function SignIn() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);
  

  function handleLogin(){
    signIn(email, password);
  }

  return (
    <Background>
      <Container
      behavior = {Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >
        <Logo source={require('../../assets/ImigrantesNovo.png')} />

        <AreaInput>
          <Input
            placeholder="Email" //texto de fundo do campo imput
            autocorrect={false} //não dar opção de correção no teclado
            autoCapitalize="none" //Não iniciar com letra maiuscula automaticamente
            value={email}
            onChangeText={(text) => setEmail(text)}
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

        <SubmitButton onPress={handleLogin}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={() =>navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>

      </Container>
    </Background>
  );
}

