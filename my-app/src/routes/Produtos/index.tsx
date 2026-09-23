import { useEffect, useState } from "react"
import type { TipoProduto } from "../../types/types";



export default function Produtos(){
    document.title = "Produto"

    const[produtos, setProdutos] = useState<TipoProduto[]>([]);
    
    useEffect(()=>{
        const carregaProdutos = async ()=>{
            try{
                const resposta = await fetch("http://localhost:3001/produtos")

                if(!resposta.ok){
                    throw new Error("Erro na listagem dos produtos!")
                }

                const data:TipoProduto[]= await resposta.json();
                console.log(data)

            } catch(error){
                console.error(error)
            }
            
        }
        carregaProdutos();
    },[])

    return(
        <main>
            <h2>Página de produtos</h2>
        </main>
    )
}