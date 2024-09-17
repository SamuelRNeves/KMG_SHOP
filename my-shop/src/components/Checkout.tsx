import React from 'react';

const Checkout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold mb-6">FINALIZAR COMPRA</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário de Dados Pessoais */}
          <div className="col-span-1 bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Dados Pessoais</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm">Email:</label>
                <input type="email" placeholder="exemplo123@gmail.com" className="w-full p-2 border rounded" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm">Primeiro nome:</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm">Último nome:</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
              </div>

              <div>
                <label className="block text-sm">CPF:</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>

              <div>
                <label className="block text-sm">Telefone:</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="salvar" className="mr-2" />
                <label htmlFor="salvar" className="text-sm">Salvar minhas informações para as próximas compras</label>
              </div>

              <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Ir para Entrega</button>
            </form>
          </div>

          {/* Botões de Entrega e Pagamento */}
          <div className="col-span-1 flex flex-col justify-between">
            <button className="w-full bg-gray-200 p-4 rounded-lg mb-4 hover:bg-gray-300">Entrega</button>
            <button className="w-full bg-gray-200 p-4 rounded-lg hover:bg-gray-300">Pagamento</button>
          </div>

          {/* Resumo do Pedido */}
          <div className="col-span-1 bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Resumo de pedido</h3>
            <div className="flex justify-between items-center mb-4">
              <img src="camisa-preta.png" alt="Camisa preta" className="w-12 h-12" />
              <span>Camisa básica preta</span>
              <span>R$ 39,99</span>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>R$ 39,99</span>
              </div>
              <div className="flex justify-between">
                <span>Cupom:</span>
                <span>R$ 10,00</span>
              </div>
              <div className="flex justify-between font-semibold mt-4">
                <span>Total:</span>
                <span>R$ 39,99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
