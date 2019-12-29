import {appid_clima} from '../utils/keys';

export function recuperarClima(latitude, longitude) {
  return {
    url: 'https://api.openweathermap.org/data/2.5/weather',
    metodo: 'get',
    params: {
      lat: latitude,
      lon: longitude,
      appid: appid_clima,
      units: 'metric',
      lang: 'pt',
    },
  };
}
