import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { Background, Container, AreaInput, Input, Logo, SubmitButton, SubmitText, Link, LinkText } from './styles';

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Background>
      <Container>
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

        <SubmitButton>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link>
          <LinkText>Criar uma conta!</LinkText>
        </Link>

      </Container>
    </Background>
  );
}

