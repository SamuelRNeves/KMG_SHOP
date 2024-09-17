export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-center text-3xl font-bold mt-10">FINALIZAR COMPRA</h1>

      <div className="flex justify-between mx-auto max-w-4xl mt-10">
        {/* Formulário */}
        <div className="p-4 bg-gray-800 rounded-lg w-1/2">
          <h2 className="text-xl mb-4">Dados Pessoais</h2>
          <form>
            <input className="block w-full p-2 mb-3 bg-gray-700 rounded" type="email" placeholder="Email" />
            <input className="block w-full p-2 mb-3 bg-gray-700 rounded" type="text" placeholder="Primeiro nome" />
            <input className="block w-full p-2 mb-3 bg-gray-700 rounded" type="text" placeholder="Último nome" />
            <input className="block w-full p-2 mb-3 bg-gray-700 rounded" type="text" placeholder="CPF" />
            <input className="block w-full p-2 mb-3 bg-gray-700 rounded" type="text" placeholder="Telefone" />
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" /> Salvar minhas informações para próximas compras
            </label>
            <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded">
              Ir para Entrega
            </button>
          </form>
        </div>

        {/* Resumo do Pedido */}
        <div className="bg-gray-800 p-4 rounded-lg w-1/3">
          <h2 className="text-xl mb-4">Resumo de pedido</h2>
          <p className="mb-2">Camisa preta - R$ 39,99</p>
          <p className="mb-2">Cupom: R$ 10,00</p>
          <p className="font-bold">Total: R$ 39,99</p>
        </div>
      </div>
    </div>
  );
}
