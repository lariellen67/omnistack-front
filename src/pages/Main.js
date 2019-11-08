//página que será usada, quando o usuário já estiver logado

import React, {useEffect, useState} from 'react'; // useeffect será usado para fazer uma chamada a Api, quando o componente for exibido em tela
import {Link} from 'react-router-dom';
import icon from '../images/icon.png';
import like from '../images/like.png';
import deslike from '../images/deslike.png';
import './Main.css';
import api from '../services/api';

export default function Main({match}){ //para recuperar o id que é mostrado na rota podemos usar o match
    //dentro do match ficam todos os params da rota
    
    const [users, setUsers] = useState([]); // é bom guardar no estado uma variável que será manipulada pelo componente

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
            <Link to="/">
        <img src={icon} alt="Tindev"></img>
            </Link>
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
        </div>
    );
}