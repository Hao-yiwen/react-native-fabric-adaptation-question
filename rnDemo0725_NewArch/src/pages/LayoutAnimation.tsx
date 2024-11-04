/**
 * @description 当时记得是在072的新架构存在性能问题
 */
import React, {useRef, useState} from 'react';
import {
  Animated,
  Button,
  Dimensions,
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const App = () => {
  const [expanded, setExpanded] = useState(false);
  const scrollviewRef = React.useRef<ScrollView>(null);
  const scrollviewAnimatedValue = useRef(new Animated.Value(0)).current;

  return (
    <View style={style.container}>
      <Animated.ScrollView
        ref={scrollviewRef}
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
        )}
        style={{
          width: Dimensions.get('screen').width * 0.5,
          overflow: 'hidden',
          height: '100%',
        }}>
        {Array.from({length: 100}).map((_, index) => (
          <View
            key={index}
            style={{
              width: Dimensions.get('screen').width * 0.5,
              height: 50,
              backgroundColor: 'pink',
              borderWidth: 0.5,
              borderColor: '#d6d7da',
              marginBottom: 10,
            }}>
            <Text>{index}</Text>
          </View>
        ))}
      </Animated.ScrollView>
      <View style={{width: Dimensions.get('screen').width * 0.5}}>
        {
          <Animated.View
            style={{
              backgroundColor: 'lightblue',
              // display: scrollviewAnimatedValue > 500 ? 'flex' : 'none',
              opacity: scrollviewAnimatedValue.interpolate({
                inputRange: [0, 5000],
                outputRange: [0, 1],
              }),
              // transform: [
              //   {
              //     translateY: scrollviewAnimatedValue.interpolate({
              //       inputRange: [0, 5000],
              //       outputRange: [0, 400],
              //     }),
              //   },
              // ],
              position: 'absolute',
              top: scrollviewAnimatedValue.interpolate({
                inputRange: [0, 5000],
                outputRange: [0, 400],
              })
            }}>
            <Text>Animated.View</Text>
          </Animated.View>
        }
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            setExpanded(!expanded);
          }}>
          <Text>Press me to {expanded ? 'collapse' : 'expand'}!</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={style.tile}>
            <Text>I disappear sometimes!</Text>
          </View>
        )}
        <Button
          title="Press me"
          onPress={() => {
            scrollviewRef.current?.scrollTo({
              y: 0,
              animated: true,
            });
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  tile: {
    backgroundColor: 'lightgrey',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default App;
