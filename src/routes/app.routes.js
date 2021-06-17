import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../../pages/Home';
import CadastrarCurriculo from '../../pages/CadastrarCurriculo';
import Empresa from '../../pages/Empresa'; 

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator
        drawerStyle={{
            backgroundColor: '#fff'
        }}
        drawerContentOptions={{
            labelStyle:{
                fontWeight: 'bold'
            },
            activeTintColor: '#131313',
            activeBackgroundColor:'#00b94a',
            inactiveBackgroundColor: '#ddd',
            inactiveTintColor: '#131313',
            itemStyle:{
                marginVertical:5,
            }
        }}
        >
            <AppDrawer.Screen name = "Home" component={Home} />
            <AppDrawer.Screen name = "Cadastrar Curriculo" component={CadastrarCurriculo}/>
            <AppDrawer.Screen name = "Empresa" component={Empresa}/>

        </AppDrawer.Navigator>
    );
}

export default AppRoutes;
