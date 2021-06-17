import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../src/contexts/auth';
import { Div, PP, Card, CardTitle, CardBody, CardFooter, Container, Head, SubmitButton, SubmitText, Background, TextTitulo, TextoNome, TextoEmail, ImgHome } from './styles';
import { Platform, TouchableOpacity } from 'react-native';

export default function Home() {

  const { user, signOut } = useContext(AuthContext);

  return (
    <Background>

      <Head>
        <Div>
          <PP source={require('../../assets/john_doe.png')} />
        </Div>
        <Div>
          <TextoNome> Nome: {user && user.nome}</TextoNome>
          <TextoEmail> Email: {user && user.email}</TextoEmail>
        </Div>
      </Head>
      <Container>
        <Card>
          <CardTitle>
            <TextTitulo>Cientista de Dados</TextTitulo>
          </CardTitle>
          <CardBody>
            <Text>
              Olaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Text>           
          </CardBody>        
          <CardFooter>      
            <SubmitButton>
              <SubmitText>Cadastrar</SubmitText>
            </SubmitButton>
            
          </CardFooter>
        </Card>
      </Container>
      <Button
        title="Sair da conta"
        onPress={() => signOut()}
        color='red'
      />
    </Background>


  );
}