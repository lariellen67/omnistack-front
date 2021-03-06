//página que será usada, quando o usuário já estiver logado

import React, {useEffect, useState} from 'react'; // useeffect será usado para fazer uma chamada a Api, quando o componente for exibido em tela
import io from 'socket.io-client';
import {Link} from 'react-router-dom';
import './Main.css';
import api from '../services/api';
import icon from '../images/icon.png';
import like from '../images/like.png';
import deslike from '../images/deslike.png';
import matchwhite from '../images/matchwhite.png';



export default function Main({match}){ //para recuperar o id que é mostrado na rota podemos usar o match
    //dentro do match ficam todos os params da rota
    
    const [users, setUsers] = useState([]); // é bom guardar no estado uma variável que será manipulada pelo componente
    const [matchDev, setMatchDev] = useState(null);

    useEffect(() => {//useEffect usa dois parâmetros, 1º é uma função que deve ser executada e 2º quando a função deve ser executada, podem ser passadas variáveis dentro de um array, se essas variáveis forem alteradas essa função irá executar novamente e se o array estiver vazio a função será executada apenas uma vez -- match.params.id (o de baixo) --> toda vez que o id que aparece na rota for alterado a função será chamada
        async function loadUsers(){ //nova função que vai chamar a api
            const response = await api.get('/devs', { //chamando api pela rota devs
                headers: { //chamando o headers que consta no Insomnia e chamando o user
                    user: match.params.id,
                }
            })
            setUsers(response.data); //setUsers irá preencher a variável users com o response.data
        }
        loadUsers(); //chamada da função
    }, [match.params.id]);


    useEffect(() =>{ //vai se conectar com o WebSocket
        const socket = io('http://localhost:3333/', {
            query: {user:  match.params.id} // query, parametro adicional, 
        });

        /*socket.on('rachel says', message =>{ //front ouvindo a mensagem do backend
            console.log(message);
        })

        setTimeout(() =>{
        socket.emit('joey says', { //emite uma mensagem para o backend
            message: 'Hey, how you doin?' //a mensagem
        })
        }, 3000); //após 3seg a mensagem é enviada*/


        socket.on('match', dev =>{
           setMatchDev(dev); //matchdev vai contar todas as informações do match
        })
    }, [match.params.id]); 

    

    async function handleDeslike(id){
        await api.post(`/devs/${id}/deslikes`, null, {
            headers: {user: match.params.id},
        })
        setUsers(users.filter(user => user._id !== id));
    }

    async function handleLike(id){
        await api.post(`/devs/${id}/likes`, null, {
            headers: {user: match.params.id},
        })
        setUsers(users.filter(user => user._id !== id));
    }

    return( 
        
        <div className="main-container">

            <div className="button-log">
                <Link to="/">
                <button type="button">Logout</button>
                </Link>
            </div>

        <img src={icon} alt="Tindev"></img>
        
        {users.length > 0 ? ( 
            <ul>
            {users.map(user => (
                <li key={user._id}>
                <img src={user.avatar} alt={user.name} ></img>
                <footer>
                    <strong>{user.name}</strong>
                    <p>{user.bio}</p>
                </footer>

                <div className="buttons">
                    <button type="button" onClick={() => handleDeslike(user._id)}>
                        <img src={deslike} alt="Deslike"></img>
                    </button>
                    <button type="button" onClick={() => handleLike(user._id)}>
                        <img src={like} alt="Like"></img>
                    </button>
                </div>

            </li>
            ))}
        </ul> 
        ):(
            <div className="empty">Acabou :(</div>
        )}

        {matchDev && (
            <div className="match-container">
                <img src={matchwhite} alt="it's a match" height="85" width="305"></img>
                <img className="avatar" src={matchDev.avatar} alt=""></img>
                <strong>{matchDev.name}</strong>
                <p>{matchDev.bio}</p>
                <button type="button" onClick={() => setMatchDev(null)}>Fechar</button>
            </div>
        )}

        </div>
    );
}