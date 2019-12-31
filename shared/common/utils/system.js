import {PermissionsAndroid} from 'react-native';

export const SystemUtils = {
  async requisitarPermissaoDeLocalizacao() {
    return await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  },

  async checarPermissaoDeLocalizacao() {
    return await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  },
};
