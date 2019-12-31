import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTyes from 'prop-types';

export const Temperatura = React.memo(props => {
  const Icone = props.icone;
  return (
    <View style={styles.container}>
      <View style={styles.containerTemp}>
        <Text style={styles.textTemperatura}>{props.temperatura}</Text>
        <Text style={[styles.textTemperatura, {fontSize: 60}]}>º</Text>
        <Icone width={120} height={80} />
      </View>
      <Text style={styles.textClima}>{props.clima}</Text>
    </View>
  );
});

Temperatura.propTypes = {
  icone: PropTyes.func,
  temperatura: PropTyes.number,
  clima: PropTyes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTemp: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTemperatura: {
    fontSize: 100,
    fontWeight: '800',
    color: '#FFF',
  },
  textClima: {
    flex: 0.3,
    fontSize: 20,
    fontWeight: '800',
    color: '#FFF',
  },
});
