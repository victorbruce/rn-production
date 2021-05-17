import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import packageJson from '../package.json';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>rnProduction App 🔥</Text>
      <Text style={styles.versionNumber}>{packageJson.version}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  versionNumber: {
    fontSize: 18,
  },
});
