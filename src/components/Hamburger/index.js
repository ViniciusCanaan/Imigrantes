import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, UseNavigation } from '@react-navigation/native';

import {Container, ButtonMenu} from './styles'

export default function Hamburger() {

    const navigation = useNavigation();


 return (
   <Container>
       <ButtonMenu onPress={()=> navigation.toggleDrawer()}>
            <Icon name="menu" color="#131313" size={30}/>
       </ButtonMenu>
   </Container>
  );
}