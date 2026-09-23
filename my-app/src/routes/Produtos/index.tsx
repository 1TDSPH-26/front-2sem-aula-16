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
                setProdutos(data);

            } catch(error){
                console.error(error)
            }
            
        }
        carregaProdutos();
    },[])

    return(
        <main>
            <h2>Página de produtos</h2>
            <div>
                <ul>
                    <table border={1} style={{borderCollapse:"collapse"}}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Estoque</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtos.map((produto)=>(
                                <tr key={produto.id}>
                                    <td>{produto.id}</td>
                                    <td>{produto.nome}</td>
                                    <td>{produto.preco}</td>
                                    <td>{produto.estoque}</td>
                                    <td>EDITAR/ <button>EXCLUIR</button></td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={5}>Quantidade de produtos: {produtos.length}</td>
                            </tr>
                        </tfoot>
                    </table>
                </ul>
            </div>
        </main>
    )
}