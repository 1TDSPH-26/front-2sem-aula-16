import { useState } from "react";
import type { TipoProduto } from "../../types/types";

export default function Produtos() {
  document.title = "Produtos";

  const[produtos, setProdutos] = useState<TipoProduto[]>([]);

  return (
    <main>
        <h2>Produtos</h2>
    </main>
  )
}
