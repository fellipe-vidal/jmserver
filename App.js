import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import nodejs from 'nodejs-mobile-react-native';

const App = () => {
  const [msg, setMsg] = useState('');

  nodejs.start('main.js');
  nodejs.channel.addListener('message', msg => {
    console.log(msg);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>From Node: {msg}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff0ea',
  },
  text: {
    color: '#484e4a',
    fontWeight: '300',
    fontSize: 32,
  },
});
