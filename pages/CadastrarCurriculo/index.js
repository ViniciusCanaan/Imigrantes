import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../../src/contexts/auth';
import { useNavigation } from '@react-navigation/native';
import Hamburger from '../../src/components/Hamburger';

import { Background, Header, TextoHeader, TextoBoasVindas, BoasVindas, ImgBoasVindas, BtnCadastrarCurriculo, BtnText } from '../CadastrarCurriculo/styles';

export default function CadastrarCurriculo() {

    const navigation = useNavigation();




    const { user } = useContext(AuthContext);
    return (
        <Background>
            <Header>
                <Hamburger />
                <TextoHeader>Currículo</TextoHeader>
            </Header>

            <BoasVindas>
                <TextoBoasVindas>Olá {user && user.nome} crie rapidamente seu currículo e comece a se inscrever para as vagas!</TextoBoasVindas>
            </BoasVindas>
            <ImgBoasVindas source={require('../../assets/WelcomeImg.png')} />
            <BtnCadastrarCurriculo onPress={() => navigation.navigate('InformacoesCurriculo')}>
                <BtnText>Cadastrar agora!</BtnText>
            </BtnCadastrarCurriculo>
        </Background>




    );
}