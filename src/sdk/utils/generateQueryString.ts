// O : string  no final da declaração indica o retorno de uma string pela funcao
function generateQueryString(
  // os parametros desta funcao serao um objeto composto de um array de string dos tipos abaixo
  params: {
    [key: string]:
      | string
      | number
      | boolean
      | string[]
      | undefined;
  }
): string {
  // define uma constante como um objeto vazio onde todas as propriedades (chave e valor) sejam string
  const convertedParams: { [key: string]: string } = {};

  // Percorre cada um dos paametros recebidos e adiciona o valor convertido para string no objeto
  // Object.keys retorna um array com todas as chaves em formato string de params
  Object.keys(params).forEach((key) => {
    // Para cada chave
    const param = params[key]; // Recupera o parametro atual
    // - Verifica se o parametro existe (se não é undefined)
    // - Armazena o paramatro no array convertido em string
    if (param) convertedParams[key] = String(param);
  });

  // Obtém um objeto
  const urlParams = new URLSearchParams(convertedParams);

  // Converte o objeto em string e acrescenta o poto de interrogacao antes da mesma
  return `?${urlParams.toString()}`;
}

export default generateQueryString;
