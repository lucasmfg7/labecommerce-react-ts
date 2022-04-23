import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <section className="filter">
          <h3>Filtros</h3>
          <label>
            <span>Valor mínimo:</span>
            <input type="number" />
          </label>
          <label>
            <span>Valor máximo:</span>
            <input type="number" />
          </label>
          <label>
            <span>Busca por nome:</span>
            <input type="number" />
          </label>
        </section>

        <section className="list">
          <header>
            <p>Quantidade de produtos: 3</p>
            <label>
              <span>Ordenação</span>
              <select>
                <option value="cresc">Crescente</option>
                <option value="descr">Decrescente</option>
              </select>
            </label>
          </header>

          <div className="grid">
            <div className="product">
              <img src="https://picsum.photos/200/200?a=3" alt="product" />
              <div className="info">
                <p>Produto Legal</p>
                <p>R$123,00</p>
                <button>Adicionar ao Carrinho</button>
              </div>
            </div>
            <div className="product">
              <img src="https://picsum.photos/200/200?a=3" alt="product" />
              <div className="info">
                <p>Produto Legal</p>
                <p>R$123,00</p>
                <button>Adicionar ao Carrinho</button>
              </div>
            </div>
            <div className="product">
              <img src="https://picsum.photos/200/200?a=3" alt="product" />
              <div className="info">
                <p>Produto Legal</p>
                <p>R$123,00</p>
                <button>Adicionar ao Carrinho</button>
              </div>
            </div>
            <div className="product">
              <img src="https://picsum.photos/200/200?a=3" alt="product" />
              <div className="info">
                <p>Produto Legal</p>
                <p>R$123,00</p>
                <button>Adicionar ao Carrinho</button>
              </div>
            </div>
            <div className="product">
              <img src="https://picsum.photos/200/200?a=3" alt="product" />
              <div className="info">
                <p>Produto Legal</p>
                <p>R$123,00</p>
                <button>Adicionar ao Carrinho</button>
              </div>
            </div>
          </div>
        </section>

        <section className="cart">
          <h3>Carrinho</h3>
          <div className="products">
            <div>
              <span>1x</span>
              <span>Produto Legal</span>
              <button>Remover</button>
            </div>
            <div>
              <span>3x</span>
              <span>Produto Normal</span>
              <button>Remover</button>
            </div>
            <div>
              <span>2x</span>
              <span>Produto Foda</span>
              <button>Remover</button>
            </div>
          </div>
          <p>Valor total: R$100,00</p>
        </section>
      </div>
    </>
  );
};

export default App;
