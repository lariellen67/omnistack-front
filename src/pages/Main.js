//página que será usada, quando o usuário já estiver logado

import React, {useEffect} from 'react'; // useeffect será usado para fazer uma chamada a Api, quando o componente for exibido em tela
import icon from '../images/icon.png';
import like from '../images/like.png';
import deslike from '../images/deslike.png';
import './Main.css';
import api from '../services/api';

export default function Main({match}){ //para recuperar o id que é mostrado na rota podemos usar o match
    //dentro do match ficam todos os params da rota
    
    /*useEffect(() => {//useEffect usa dois parâmetros, 1º é uma função que deve ser executada e 2º quando a função deve ser executada, podem ser passadas variáveis dentro de um array, se essas variáveis forem alteradas essa função irá executar novamente e se o array estiver vazio a função será executada apenas uma vez -- match.params.id --> toda vez que o id que aparece na rota for alterado a função será chamada
        async function loadUsers(){
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            })
        }

        loadUsers();
    }, [match.params.id]);

    }*/ //NÃO QUER FUNCIONAR COM ESSA PARTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    return( 
        <div className="main-container">
        <img src={icon} alt="Tindev"></img>
        <h1>É os cowboys do mandelão!</h1>
        <ul>
            <li>
                <img src="https://compote.slate.com/images/03c09fa7-bdaa-455d-874e-038d03ee395f.jpeg?width=780&height=520&rect=4769x3179&offset=0x391" alt="" height="307"></img>
                <footer>
                    <strong>Beyoncé Knowles-Carter</strong>
                    <p>A.K.A Sasha Fierce, rainha da porra toda, pede desculpas, mas não está arrependida. Tell boy bye</p>
                </footer>

                <div className="buttons">
                    <button type="button">
                        <img src={deslike} alt="Deslike"></img>
                    </button>
                    <button type="button">
                        <img src={like} alt="Like"></img>
                    </button>
                </div>
            </li>

            <li>
                <img src="https://i.pinimg.com/originals/5d/c3/66/5dc36613b61388f2850447ca06b54595.jpg" alt="" height="307"></img>
                <footer>
                    <strong>Chandler Bing</strong>
                    <p>Faz análise e configuração de dados. Transponster. Gosta de ver o W.I.N.U.S feliz. Could him be anymore pretty?</p>
                </footer>

                <div className="buttons">
                    <button type="button">
                        <img src={deslike} alt="Deslike"></img>
                    </button>
                    <button type="button">
                        <img src={like} alt="Like"></img>
                    </button>
                </div>
            </li>

            <li>
                <img src="https://i.pinimg.com/originals/f1/e7/34/f1e734090c46b54db1788df91b1e3d6c.png" alt="" height="307"></img>
                <footer>
                    <strong>Lagertha</strong>
                    <p>Também conhecida como Earl Ingstad, escudeira fodona, rainha de Kattegat e do meu coração. Tem uma coruja maneira</p>
                </footer>

                <div className="buttons">
                    <button type="button">
                        <img src={deslike} alt="Deslike"></img>
                    </button>
                    <button type="button">
                        <img src={like} alt="Like"></img>
                    </button>
                </div>
            </li>

            <li>
                <img src="https://fsmedia.imgix.net/25/30/69/be/2909/4a01/98af/e1f862c2b6ca/digital-concept-art-for-the-demogorgon-source-aaron-sims-creative.jpeg?rect=295%2C0%2C688%2C688&auto=compress&w=1200" alt="" height="307"></img>
                <footer>
                    <strong>Demogorgon</strong>
                    <p>Sequestrador de crianças, habita o mundo invertido e gosta de lugares frios. Ponto fraco: Eleven</p>
                </footer>

                <div className="buttons">
                    <button type="button">
                        <img src={deslike} alt="Deslike"></img>
                    </button>
                    <button type="button">
                        <img src={like} alt="Like"></img>
                    </button>
                </div>
            </li>

            <li>
                <img src="https://peopledotcom.files.wordpress.com/2018/01/stephen-tyler.jpg?w=1676&h=2000" alt="" height="307"></img>
                <footer>
                    <strong>Steven Tyler</strong>
                    <p>Vocalista do Aerosmith, um dos bad boys from Boston. Paixão forte pela Alicia Silverston.</p>
                </footer>

                <div className="buttons">
                    <button type="button">
                        <img src={deslike} alt="Deslike"></img>
                    </button>
                    <button type="button">
                        <img src={like} alt="Like"></img>
                    </button>
                </div>
            </li>

            <li>
                <img src="https://avatars3.githubusercontent.com/u/39104322?v=4" alt=""></img>
                <footer>
                    <strong>Caroline Telles</strong>
                    <p>Programadora fodona. Às vezes se esquece de subir os terraform. Rainha da Stit</p>
                </footer>

                <div className="buttons">
                    <button type="button">
                        <img src={deslike} alt="Deslike"></img>
                    </button>
                    <button type="button">
                        <img src={like} alt="Like"></img>
                    </button>
                </div>
            </li>
        </ul> 
        </div>
    );
}