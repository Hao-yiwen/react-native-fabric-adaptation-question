/**
 * @description Flatlist在scrollview中无法进行点击
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';

const Index = props => {
  const [contentOffset, setContentOffset] = React.useState(0);
  const scrollViewRef = React.useRef(null);
  return (
    <View style={styles.container}>
      <ScrollView
        style={{flex: 1, width: Dimensions.get('screen').height}}
        ref={scrollViewRef}>
        <FlatList
          horizontal
          data={Array.from({length: 100})}
          renderItem={({index}) => {
            if (index % 2 == 0) {
              return (
                <View
                  style={{
                    height: 100,
                    backgroundColor: 'green',
                    margin: 10,
                    width: 60,
                  }}>
                  <Text>
                    {index} {contentOffset}
                  </Text>
                </View>
              );
            }
            return (
              <Pressable
                onPress={() => {
                  console.log('pressable');
                  setContentOffset(contentOffset + 1);
                }}>
                <View
                  style={{
                    height: 100,
                    backgroundColor: 'blue',
                    margin: 10,
                    width: 60,
                  }}>
                  <Text>
                    {index} {contentOffset}
                  </Text>
                </View>
              </Pressable>
            );
          }}
        />
        {Array.from({length: 100}).map((_, index) => (
          <View
            key={index}
            style={{height: 50, backgroundColor: 'pink', margin: 10}}></View>
        ))}
      </ScrollView>
    </View>
  );
};

Index.options = {
  topBar: {
    title: {
      text: 'FlatlistInScrollview',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});

export default Index;
