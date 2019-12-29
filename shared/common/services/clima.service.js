import * as api from '../apis/clima.api';
import {executarServico} from '../../common/utils/api';

export const ClimaService = {
  async recuperarClimaPelaLocalizacao() {
    const data = await executarServico(api.recuperarClima());
    console.log(data);
  },
};
