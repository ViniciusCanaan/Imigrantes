import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../../src/components/Hamburger';

import { AuthContext } from '../../src/contexts/auth';
import { InformacoesConta, ImgPerfil, Card, CardTitle, CardBody, CardFooter, Container, HeaderInformacoes, SubmitButton, SubmitText, Background, TextTitulo, TextoNome, TextoEmail, ImgHome, TextoCard } from './styles';
import { Platform, TouchableOpacity } from 'react-native';

export default function Home() {

  const { user, signOut } = useContext(AuthContext);

  return (
    <Background>
      <HeaderInformacoes>
        <Header />
        <ImgPerfil source={require('../../assets/john_doe.png')} />
        <InformacoesConta>
          <TextoNome> Nome: {user && user.nome}</TextoNome>
          <TextoEmail> Email: {user && user.email}</TextoEmail>
        </InformacoesConta>
      </HeaderInformacoes>

      <Card>
        <CardTitle>{user && user.nome}</CardTitle>
        <CardBody>
          <TextoCard>
            Telefone: + 55(33) 3333-3333  {"\n"}
            {"\n"}
            Celular: + 55 (33) 99999-9999 {"\n"}
            {"\n"}
            E-mail: {user && user.email} {"\n"}
            {"\n"}
            Cep: 33333-333 {"\n"}
            {"\n"}
            Endereço: Rua teste joséfino  {"\n"}
            {"\n"}
            Numero: 333 {"\n"}
            {"\n"}
            Bairro: Testando {"\n"}
            {"\n"}
            Cidade: Testador {"\n"}
            {"\n"}
            País de Origem: Angola {"\n"}
          </TextoCard>
        </CardBody>
      </Card>

      <Button
        title="Sair da conta"
        onPress={() => signOut()}
        color='#D32F2F'
      />
    </Background>


  );
}