import React from 'react';
import icon from '../images/icon.png';
import './Login.css';
import { isContainer } from 'postcss-selector-parser';

export default function Login (){
    return(
        <div className="login-container">
            <form>
                <img src={icon} alt="Tindev"></img>
                <input placeholder="Digite o seu usuário do GitHub"></input>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );

}