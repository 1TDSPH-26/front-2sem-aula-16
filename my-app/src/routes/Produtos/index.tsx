import { useState } from "react"
import type { TipoProduto } from "../../types/types";



export default function Produtos(){
    document.title = "Produto"

    

    const[produtos, setProdutos] = useState<TipoProduto[]>([]);

    return(
        <main>
            <h2>Página de produtos</h2>
        </main>
    )
}