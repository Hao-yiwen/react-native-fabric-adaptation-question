import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Index = () => {
  return (
    <View>
      <TextInput
        maxLength={10}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
};

Index.options = {
  topBar: {
    title: {
      text: 'TextInputInvalid',
    },
  },
};

export default Index;
