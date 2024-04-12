import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const Index: React.FC = () => {
  const scrollviewAnimatedValue = new Animated.Value(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
      }}>
      <Animated.View
        style={{
          width: 60,
          height: 60,
          backgroundColor: scrollviewAnimatedValue.interpolate({
            inputRange: [0, 5000],
            outputRange: ['#ff00ff', '#00ff00'],
          }),
        }}></Animated.View>
      <Animated.ScrollView
        style={{
          flex: 1,
          height: 500,
          width: Dimensions.get('screen').width,
          backgroundColor: 'yellow',
        }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollviewAnimatedValue,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        )}>
        {Array.from({length: 100}).map((_, index) => (
          <Animated.View
            key={index}
            style={{
              marginTop: 10,
              width: 200,
              height: 60,
              backgroundColor: 'red',
            }}>
            <Text>{index}</Text>
          </Animated.View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

Index.options = {
  topBar: {
    title: {
      text: 'AnimatedBackgroundColor',
    },
  },
};

export default Index;
