import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  RefreshControl,
  ScrollView,
} from 'react-native';

const Index: React.FC = () => {
  const flatListRef = useRef(null);
  return (
    <View style={styles.container}>
      <View
        style={{
          width: Dimensions.get('screen').width,
          height: 200,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <ScrollView
          style={{
            width: Dimensions.get('screen').width * 0.3,
            backgroundColor: 'pink',
            height: Dimensions.get('screen').height,
          }}>
          {Array.from({length: 100}, (_, index) => (
            <View
              key={index}
              style={{
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightblue',
                marginVertical: 20,
              }}>
              <Text>View {index}</Text>
            </View>
          ))}
        </ScrollView>
        <FlatListDemo ref={flatListRef} />
      </View>
    </View>
  );
};

Index.options = {
  topBar: {
    title: {
      text: 'FlatListStuckAndStopped',
      color: 'white',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  targetView: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    marginVertical: 20,
  },
  backgroundImageBody: {
    height: 200, // 仅示例，根据需要调整
  },
  backgroundImage: {
    height: 200,
  },
});

const FlatListDemo = React.forwardRef((props, flatListRef) => {
  const animatedValue = new Animated.Value(0);
  const [isRefresh, setIsRefresh] = useState(false);
  const [refreshStatus, setRefreshStatus] = useState(0);
  const [flatListData, setFlatListData] = useState([]);

  // 模拟FlatList数据
  useEffect(() => {
    const data = Array.from({length: 20}, (_, index) => ({
      a: index % 2, // 用于切换渲染的视图
      id: index,
    })).map((item, index) =>
      item.a === 1
        ? {
            ...item,
            title: `Title ${index}`,
            content: `Content ${index}`,
          }
        : item,
    );
    setFlatListData(data);
  }, []);

  // 模拟刷新动作
  const refreshOrder = () => {
    setIsRefresh(true);
    setTimeout(() => {
      setIsRefresh(false);
      setRefreshStatus(status => (status + 1) % 2); // 简单切换刷新状态文本
    }, 2000);
  };

  // 模拟隐藏引导动作
  const hideGuide = () => {
    console.log('animated:', animatedValue);
    console.log('Hide guide');
  };

  // 模拟刷新状态文本
  const REFRESHSTATUS = ['Pull to refresh', 'Loading...'];

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 3000],
    outputRange: ['rgb(0, 255, 0)', 'rgb(255, 0, 0)'],
  });

  return (
    <Animated.FlatList
      style={{
        height: Dimensions.get('screen').height,
      }}
      nestedScrollEnabled={true}
      ref={flatListRef}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      scrollEventThrottle={20}
      data={flatListData}
      renderItem={({item}) => {
        return (
          <Animated.View
            style={{
              width: Dimensions.get('screen').width * 0.7,
              marginTop: 20,
              height: 300,
              backgroundColor: backgroundColor,
            }}></Animated.View>
        );
      }}
      keyExtractor={item => String(item.id)}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: animatedValue}}}],
        {
          useNativeDriver: false,
          listener: event => {
            hideGuide();
          },
        },
      )}
      refreshControl={
        <RefreshControl
          style={{backgroundColor: 'transparent'}}
          refreshing={isRefresh}
          onRefresh={refreshOrder}
          title={REFRESHSTATUS[refreshStatus]}
          tintColor="#FFF"
          titleColor="#FFF"
        />
      }
    />
  );
});

export default Index;
