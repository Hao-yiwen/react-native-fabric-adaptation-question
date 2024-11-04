/**
 * @deprecated 长度限制不生效
 */
import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Index = () => {
  return (
    <View style={{justifyContent: 'center', flex: 1}}>
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
