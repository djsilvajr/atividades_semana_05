import { Produto } from "./produto.js";

export class Pedido {
  constructor(numPedido, nomeCliente) {
    this.numeroPedido = numPedido;
    this.nomeCliente = nomeCliente;
    this.dataPedido = new Date().toLocaleDateString();
    this.estaPago = false;
    this.listaProdutos = [];
  }

  adicionarProduto(produto) {
    const validar = produto instanceof Produto;
    if (validar) {
      this.listaProdutos.push(produto);
    }
  }

  calcularTotal() {
    let total
    this.listaProdutos.forEach((produto) => {
      total = produto.preco * produto.quantidade;
    });
    return total;
  }
}
