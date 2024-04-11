import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Animated,
  findNodeHandle,
  Dimensions,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

const Index: React.FC = () => {
  const scrollViewRef = useRef(null);
  // 创建一个子视图的ref，我们将测量并滚动到这个视图
  const targetViewRef = useRef(null);

  const headerRef = useRef(null);

  const scrollToView = () => {
    // 获取ScrollView和目标视图的node handles
    const scrollViewNode = findNodeHandle(scrollViewRef.current);
    const targetViewNode = findNodeHandle(targetViewRef.current);

    if (scrollViewNode && targetViewNode) {
      targetViewRef.current.measureLayout(
        scrollViewNode,
        (left, top, width, height) => {
          // 使用得到的top位置来滚动到目标视图
          console.log('top:', top, 'height:', height);
          scrollViewRef.current?.scrollTo({y: top, animated: true});
        },
        error => {
          console.error(error);
        },
      );
    }
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView ref={scrollViewRef} style={styles.scrollView}>
        {/* 添加一些占位内容 */}
        <View style={{height: 800, backgroundColor: 'red'}} ref={headerRef}>
          <Text>scrollview头部</Text>
        </View>
        {/* 这是我们想要滚动到的视图 */}
        <View ref={targetViewRef} style={styles.targetView}>
          <Text>这是目标位置</Text>
        </View>
        <View style={{height: 800, backgroundColor: 'orange'}}>
          <Text>scrollview尾部</Text>
        </View>
      </Animated.ScrollView>
      <View style={{marginBottom: 20}}>
        <Button title="滚动到目标位置" onPress={scrollToView} />
      </View>
    </View>
  );
};

Index.options = {
  topBar: {
    title: {
      text: 'Animated',
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
});

export default Index;
