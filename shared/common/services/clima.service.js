import * as api from '../apis/clima.api';
import {executarServico} from '../../common/utils/api';

export const ClimaService = {
  async recuperarClimaPelaLocalizacao(latitude, longitude) {
    const {data} = await executarServico(
      api.recuperarClima(latitude, longitude),
    );
    console.log('dados:', data);
    return data;
  },
};
