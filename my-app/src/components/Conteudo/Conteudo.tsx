
import { useState } from "react";
import imgQuadrada from "../../img/quadrado.png";

export default function Conteudo(){

    let nome:string|null = "Giovanni";

    const [nomeState, setNomeState] = useState<string | null>("Joel");

    function alteraNome(){
        nome = prompt("Digite o novo nome: ");
        console.log("Nome digitado: ", nome);
    }

    function alteraState(){
        const nome:string|null = prompt("Digite seu nome: ");
        setNomeState((nomeStateAnterior) => nomeStateAnterior = nome);
        console.log("Nome digitado: ", nomeState);
    }

    return(
        <main>
            <div>
                <p> Nome: {nome} </p>
                <button onClick={alteraNome}>Nome = {nome}</button>
            </div>
            <div>
                <p>Nome State: {nomeState}</p>
                <button onClick={alteraState}>Nome = {nomeState}</button>
            </div>
            <section>
                <h2>Conteúdo Básico</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum id doloremque sint esse odio tempore ipsam, quas debitis corrupti cupiditate necessitatibus unde ratione nam? Quos optio eos rem qui placeat.</p>
            </section>
            <section>
                <h2>Exemplo de Imagens</h2>
                {/* Referência  Link externo*/}
                <figure>
                    <img src="https://placehold.co/400x400/c1c1c1/000000/png" alt="Imagem Exemplo1" />
                    <figcaption>Bloco de Imagem 400 x 400</figcaption>
                </figure>
                {/* Referência interna no src */}
                <figure>
                    <img src={imgQuadrada} alt="Imagem Exemplo2" />
                    <figcaption>Bloco de Imagem 400 x 400</figcaption>
                </figure>
                {/* Referência interna na public */}
                <figure>
                    <img src="/img/quadrado.png" alt="Imagem Exemplo3" />
                    <figcaption>Bloco de Imagem 400 x 400</figcaption>
                </figure>
            </section>

            <section>
                <h2>Especial</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quos maxime temporibus eveniet nesciunt at aliquam ipsum qui nobis, beatae facere cumque debitis. Modi quod beatae nemo iure optio nam esse corrupti dolorum, nulla voluptatum ad asperiores exercitationem quis assumenda suscipit quo? Ratione deleniti ipsam qui quibusdam iste sed ea.</p>
            </section>
        </main>
    );
}
