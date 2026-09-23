import { useState } from "react"
import type { tipoProduto } from "../../types/tipoProduto"




export default function Produtos() {
    const [produto, setProduto] = useState<tipoProduto[]>([])


    return(
        <div>
            <h1>Produtos </h1>
        </div>
    )
}
