import axios, { AxiosResponse } from 'axios';

// Cria a instancia do axios
const Http = axios.create();

class Service {
  // Propriedade publica pode ser acessada de fora de sua classe
  // Propriedade privada só pode ser acessada de dentro de sua classe
  // Propriedade protegida pode ser acessada de dentro da classe e pelos herdeiros da classe
  protected static Http = Http;

  protected static getData = getData;
}

function getData<T>(response: AxiosResponse<T>) {
  return response.data;
}

// modifica o base URL da API
Http.defaults.baseURL = 'http://localhost:8080';

export default Service;
