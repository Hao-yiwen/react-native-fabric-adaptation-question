import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Index: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={{width: 100, alignItems: 'center'}}>
        <Text style={styles.text}>Hello, World!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

Index.options = {
  topBar: {
    title: {
      text: 'TextInView',
    },
  },
};

export default Index;
