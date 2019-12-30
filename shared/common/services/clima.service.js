import * as api from '../apis/clima.api';
import {executarServico} from '../../common/utils/api';
import {informacoesPorCodigo} from '../../common/utils/consts';

export const ClimaService = {
  /**
   * @method metodo responsável por retornar objeto com as informações que serão utilizadas na página
   * @param {*} result parametro com o resultado vindo da api de localizacao
   *
   */

  async recuperarClimaPelaLocalizacao(latitude, longitude) {
    const {data} = await executarServico(
      api.recuperarClima(latitude, longitude),
    );
    return {
      endereco: data.name,
      temperatura: parseInt(data.main.temp),
      sensacao: data.main.feels_like,
      vento: data.wind.speed,
      nuvens: data.clouds.all,
      pressao: data.main.pressure,
      pais: data.sys.country,
      color: this.tratarTemaPorCodigo(data.weather[0].icon)[0].cor,
      icone: this.tratarTemaPorCodigo(data.weather[0].icon)[0].icone,
    };
  },

  /**
   *
   * @param {*} codigo código vem a partir do resultado ad request da api do openweather
   * Ele indica imagem relacionada ao tempo da localização
   * para verificar os possíveis códigos é só acessar o link: https://openweathermap.org/weather-conditions
   */
  tratarTemaPorCodigo(codigo) {
    return informacoesPorCodigo.filter(
      informacao => informacao.codigo === codigo,
    );
  },
};
