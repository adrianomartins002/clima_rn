import * as api from '../apis/clima.api';
import {executarServico} from '../../common/utils/api';
import {informacoesPorCodigo} from '../../common/utils/consts';

export const ClimaService = {
  async recuperarClimaPelaLocalizacao(latitude, longitude) {
    const {data} = await executarServico(
      api.recuperarClima(latitude, longitude),
    );
    return data;
  },

  tratarTemaPorCodigo(codigo) {
    return informacoesPorCodigo.filter(
      informacao => informacao.codigo === codigo,
    );
  },
};
