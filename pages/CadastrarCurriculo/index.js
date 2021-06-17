import React from 'react';
import { View, Text } from 'react-native';

import {Background, Header,TextoHeader ,TextoBoasVindas, BoasVindas, ImgBoasVindas, BtnCadastrarCurriculo, BtnText} from '../CadastrarCurriculo/styles'; 

export default function CadastrarCurriculo() {
 return (
   <Background>
       <Header>
           <TextoHeader>Currículo</TextoHeader>
       </Header>
       
       <BoasVindas>
       <TextoBoasVindas>Olá Fulano crie rapidamente seu currículo e comece a se inscrever para as vagas!</TextoBoasVindas>
       </BoasVindas>
       <ImgBoasVindas source = {require('../../assets/WelcomeImg.png')}/>
       <BtnCadastrarCurriculo>
           <BtnText>Cadastrar agora!</BtnText>
       </BtnCadastrarCurriculo>
   </Background>

   


  );
}