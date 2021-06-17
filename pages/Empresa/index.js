import React from 'react';

import {Container, NomeEmpresa, NewLink, NewText, LogoEmpresa} from './styles';

export default function Empresa() {
 return (
   <Container>
       <NomeEmpresa>
           Fiat Automoveis
       </NomeEmpresa>
       <LogoEmpresa source={require('../../assets/LogoFiat.png')} />
       <NewLink>
           <NewText>Verificar Vagas</NewText>
       </NewLink>
       <NomeEmpresa>
           Ambev
       </NomeEmpresa>
       <LogoEmpresa source={require('../../assets/LogoAmbev.png')} />
       <NewLink>
           <NewText>Verificar Vagas</NewText>
       </NewLink>
       <NomeEmpresa>
           Vale
       </NomeEmpresa>
       <LogoEmpresa source={require('../../assets/LogoVale.png')} />
       <NewLink>
           <NewText>Verificar Vagas</NewText>
       </NewLink>
   </Container>
  );
}