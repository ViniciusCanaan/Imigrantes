import React, { useContext } from 'react';
import { View, TextInput } from 'react-native';
import Hamburger from '../../src/components/Hamburger';


import { Background, TextoBoasVindas, Header, TextoHeader, ViewInput, ImgCadastrar, ViewRegistrar, BtnCadastrar, TextoBtnCadastrar } from '..//InformacoesCurriculo/styles';

import { AuthContext } from '../../src/contexts/auth';

export default function InformacoesCurriculo() {

    const { user } = useContext(AuthContext);

    return (
        <Background>
            <Header>
                <Hamburger />
                <TextoHeader>Formulário</TextoHeader>
            </Header>
            <TextoBoasVindas>Olá {user && user.nome} preencha as suas informações para divulgarmos para as empresas!</TextoBoasVindas>
            <ViewInput>
                <TextInput
                    placeholder='Nome'
                    autocorrect={false} //não dar opção de correção no teclado      
                    textAlign='center'
                    underlineColorAndroid='#131313'
                />
                <TextInput
                    placeholder='E-mail'
                    autocorrect={false} //não dar opção de correção no teclado
                    textAlign='center'
                    underlineColorAndroid='#131313'
                    keyboardType='email-address'
                />

                <TextInput
                    placeholder='Telefone'
                    autocorrect={false} //não dar opção de correção no teclado
                    textAlign='center'
                    underlineColorAndroid='#131313'
                    keyboardType='phone-pad'

                />

                <TextInput
                    placeholder='Nacionalidade '
                    autocorrect={false} //não dar opção de correção no teclado
                    textAlign='center'
                    underlineColorAndroid='#131313'
                />

                <TextInput
                    placeholder='Registro Nacional de Estrangeiros (RNE) '
                    autocorrect={false} //não dar opção de correção no teclado
                    textAlign='center'
                    underlineColorAndroid='#131313'
                    keyboardType='numeric'
                />

                <TextInput
                    placeholder='Data de Nascimento'
                    autocorrect={false} //não dar opção de correção no teclado
                    textAlign='center'
                    underlineColorAndroid='#131313'
                    keyboardType='default'
                />

            </ViewInput>

            <ViewRegistrar>
                <ImgCadastrar source={require('../../assets/Curriculo.png')} />
                <BtnCadastrar onPress={() => {
                    alert('Formulário Salvo com Sucesso!')
                }}>
                    <TextoBtnCadastrar>Salvar</TextoBtnCadastrar>
                </BtnCadastrar>
            </ViewRegistrar>


        </Background >

    );
}