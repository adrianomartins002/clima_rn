import {appid_clima} from '../utils/keys';

/**
 *
 * @param {*} latitude
 * @param {*} longitude
 * headers: appid- appid do usuario da conta do openweather
 * units: metric - para celsius, lang - pt para português
 *
 */

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
