import React, {useState} from 'react';
import icon from '../images/icon.png';
import './Login.css';
import api from '../services/api';

export default function Login ({history}){ //todos os componentes que são totas herdam a propriedade history

    const [username, setUsername] = useState('');
    //quando precisar modificar o valor de username --> setUsername
    //quando precisar acesssar o valor de username --> username

    async function handleSubmit(e){ //pode ser criada função dentro de função, essa função será disparada quando o usuário clicar em submit no form
        e.preventDefault(); //previne o comportamento padrão do formulário que é de direcionar o user para outra page 
        const response = await api.post('/devs', {
            username, // é o dado que consta no corpo da api
        }); // vai esperar a resposta a api para executar, ele usa o método post, pq é o mesmo que está no Insomnia na parte de cadastros, e chama a parte da url que não consta no api.js da baseURL

        const{_id} = response.data;
        history.push(`/dev/${_id}`);
    }

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit} /* é uma função do hmtl*/>
                <img src={icon} alt="Tindev"></img>
                <input 
                    placeholder="Digite o seu usuário do GitHub"
                    value={username} //valor do input é igual o username
                    onChange={e => setUsername(e.target.value)} //quando houver uma mudança no input vai ser chamado o onChange
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );

}