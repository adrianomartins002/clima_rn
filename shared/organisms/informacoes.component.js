import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const Info = props => {
  return (
    <View
      style={{
        height: 60,
        width: '100%',
        justifyContent: 'center',
      }}>
      {/* <Text>{props.text}</Text> */}
      <Text>Informacao</Text>
    </View>
  );
};

export const Informacoes = props => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25}}>Informações</Text>
      <FlatList
        renderItem={() => Info()}
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
        ItemSeparatorComponent={() => null}
        style={{width: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 15,
  },
  text: {
    fontSize: 100,
    fontWeight: '800',
  },
});
