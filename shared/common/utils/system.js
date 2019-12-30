import {PermissionsAndroid} from 'react-native';

export const SystemUtils = {
  async requisitarPermissaoDeLocalizacao() {
    return await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permissão de localização',
        message:
          'Para conseguir o clima da sua região ' +
          'é necessário a permissão de localização',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      },
    );
  },
};
