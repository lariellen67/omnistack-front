import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';


export default function Routes(){
    //'''path --> de onde parte a rota, component chama a rota Login, quando o usuário estiver no início (/), exact obriga o react a mostrar exatamente aquela rota
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}></Route>
            <Route path="/dev/:id" component={Main}></Route>
        </BrowserRouter>
    );
}