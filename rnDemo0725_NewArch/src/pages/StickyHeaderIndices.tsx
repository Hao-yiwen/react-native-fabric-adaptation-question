/**
 * @description 072新架构中StickyHeaderComponent貌似不生效 需要再验证一下
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Dimensions,
  ScrollView,
  Animated,
} from 'react-native';

const Data = Array.from({length: 100}).map((v, i) => ({
  key: i,
  title: `title${i}`,
}));

const Index = props => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <ScrollView
        style={{width: Dimensions.get('screen').width * 0.4}}
        StickyHeaderComponent={() => (
          <View style={{height: 30, backgroundColor: 'yellow'}}>
            <Text>StickyHeaderComponent</Text>
          </View>
        )}>
        {Array.from({length: 100}).map((_, index) => (
          <View
            key={index}
            style={{
              height: 100,
              backgroundColor: index % 2 == 0 ? 'pink' : 'blue',
              margin: 10,
              width: Dimensions.get('screen').width * 0.4,
            }}>
            <Text>{index}</Text>
          </View>
        ))}
      </ScrollView>
      <Animated.FlatList
        style={{width: Dimensions.get('screen').width * 0.6}}
        data={Data}
        stickyHeaderHiddenOnScroll={true}
        stickyHeaderIndices={[5, 10]}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: Dimensions.get('screen').width * 0.6,
                height: 30,
                backgroundColor: parseInt(item.key) % 2 == 0 ? 'pink' : 'blue',
              }}>
              <Text>{item.key}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

Index.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
};

export default Index;
