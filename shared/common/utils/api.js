import axios, {AxiosPromise} from 'axios';
import * as qs from 'qs';
const axiosInstance = axios.create();

/**
 * Executa uma requisição para o webservice mobile
 * @param {Rota} rota Objeto de configuração da rota que será requisitada
 */
export function executarServico(rota): AxiosPromise {
  return rotear(rota);
}

/**
 * @todo Falta configurar essa função
 * para recuperar corretamente
 * a cidade e a filial selecionada.
 */
async function rotear({metodo, url, headers, data, ...otherParams}) {
  headers = {
    ...headers,
  };
  if (data) {
    const instancia = await axiosInstance(url, data, {
      ...otherParams,
      paramsSerializer: params => {
        return qs.stringify(params, {arrayFormat: 'repeat'});
      },
      headers,
    });
    return instancia;
  } else {
    const instancia = await axiosInstance(url, {
      ...otherParams,
      paramsSerializer: params => {
        return qs.stringify(params, {arrayFormat: 'repeat'});
      },
      headers,
    });
    return instancia;
  }
}
