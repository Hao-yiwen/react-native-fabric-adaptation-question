import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Animated,
  TouchableOpacity,
} from 'react-native';

const Index: React.FC = () => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animated.loop(
    Animated.sequence([
      Animated.timing(translateX, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: true,
      }),
      // Animated.spring(translateX, {
      //   toValue: 0,
      //   friction: 9,
      //   tension: 10,
      //   useNativeDriver: true,
      // }),
    ]).start(),
      // ).start();
      console.log('translateX', translateX);
  }, [translateX]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          console.log('click', translateX);
        }}>
        <Animated.View
          style={{
            width: 60,
            height: 60,
            backgroundColor: 'red',
            transform: [{translateX}],
          }}></Animated.View>
      </TouchableOpacity>
    </View>
  );
};

Index.options = {
  topBar: {
    title: {
      text: 'AnimatedTranslate',
    },
  },
};

export default Index;
