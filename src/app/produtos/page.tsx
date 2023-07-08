export default function Produtos() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-full w-full gap-4">
        <div className="flex min-h-[100px] w-full flex-1 items-center justify-center bg-strongBlue">
          Lista de usuários
        </div>
        <div className="flex min-h-[100px] w-full flex-1 flex-col items-center justify-center bg-strongBlue py-3 duration-300 hover:flex-[1.5]">
          cadastrar produto
          <h1 className="text-red-500"> Caracteristicas de produtos: </h1>
          <ul className=" list-decimal p-5">
            <li> Nome </li>
            <li> Preço </li>
            <li> Preço promocional </li>
            <li> Descrição </li>
            <li> Imagens </li>
            <li> Caracteristicas de produto </li>
            <li> Produtos similares </li>
            <li> Quantidade de estoque </li>
            <li> Categoria </li>
            <li> SubCategorias </li>
            <li> Descontos unitário </li>
            <li> Fabricante </li>
            <li> Codigo de indêntificação </li>
            <li> Marca </li>
            <li> Encomendar produto sem estoque </li>
          </ul>
        </div>
        <div className="flex flex-1 items-center justify-center bg-strongBlue">
          <h1> Editar produtos </h1>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex min-h-[100px] flex-1 items-center justify-center bg-strongBlue">
          {' '}
          detalhes de produtos
        </div>
        <div className="min-h-[100px] flex-1 "></div>
        <div className="min-h-[100px] flex-1 "></div>
      </div>
    </div>
  );
}
