import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import Hamburger from '../../src/components/Hamburger';

import { Container, NomeEmpresa, NewLink, NewText, LogoEmpresa, ImgEmpresas, TextProximo } from './styles';

const MyPager = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Hamburger />
            <PagerView style={styles.viewPager} initialPage={0} >

                <View style={styles.page} key="1">
                    <NomeEmpresa>
                        Fiat Automoveis
                    </NomeEmpresa>
                    <LogoEmpresa source={require('../../assets/LogoFiat.png')} />
                    <NewLink onPress={() => {
                        alert('Ops ainda não existem vagas.')
                    }}>
                        <NewText>Verificar Vagas</NewText>
                    </NewLink>
                    <TextProximo>Próximo ➡️</TextProximo>

                </View>
                <View style={styles.page} key="2">
                    <NomeEmpresa>
                        Ambev
                    </NomeEmpresa>

                    <LogoEmpresa source={require('../../assets/LogoAmbev.png')} />
                    <NewLink onPress={() => {
                        alert('Ops ainda não existem vagas.')
                    }}>
                        <NewText>Verificar Vagas</NewText>
                    </NewLink>
                    <Text>Próximo ➡️</Text>

                </View>
                <View style={styles.page} key="3">
                    <NomeEmpresa>
                        Vale
                    </NomeEmpresa>
                    <LogoEmpresa source={require('../../assets/LogoVale.png')} />
                    <NewLink onPress={() => {
                        alert('Ops ainda não existem vagas.')
                    }}>
                        <NewText>Verificar Vagas</NewText>
                    </NewLink>
                </View>
            </PagerView>
            <ImgEmpresas source={require('../../assets/ImgEmpresa.png')} />
        </View>
    );
};

const styles = StyleSheet.create({
    viewPager: {
        height: 350,
        backgroundColor: '#F5F5F5',
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MyPager;