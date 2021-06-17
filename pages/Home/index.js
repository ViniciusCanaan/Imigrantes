import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { AuthContext } from '../../src/contexts/auth';
import { Div, PP, Card, CardTitle, CardBody, CardFooter, Container, Head, SubmitButton, SubmitText } from './styles';
import { Platform, TouchableOpacity } from 'react-native';

export default function Home() {

  const { user } = useContext(AuthContext);

  return (
    <View>

      <Head>
        <Div>
        <PP source={require('../../assets/john_doe.png')} />
        </Div> 
        <Div>
        <Text>{user && user.nome}</Text>
        <Text>{user && user.email}</Text>
        </Div>
      </Head>
      <Container>
        <Card>
          <CardTitle>
            <Text>Cientista de Dados</Text>
          </CardTitle>
          <CardBody>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </Text>
          </CardBody>
          <CardFooter>
            <SubmitButton>
              <SubmitText>Cadastrar</SubmitText>
            </SubmitButton>
          </CardFooter>
        </Card>
      </Container>
    </View>
  );
}