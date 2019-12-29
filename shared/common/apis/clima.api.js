//   'http://api.openweathermap.org/data/2.5/weather?lat=-2.519185&lon=-44.247190&appid=47ec3cd1bacd2d461e09c88a375e1f9d&units=metric',
import {appid_clima} from '../utils/keys';

export function recuperarClima(latitude, longitude) {
  return {
    url: 'http://api.openweathermap.org/data/2.5/weather',
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
