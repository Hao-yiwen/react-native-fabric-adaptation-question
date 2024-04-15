import React, {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  RefreshControl,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import Tab, {TabItemProps} from './components/Tab';

const TABLIST = [
  {
    title: 'Tab1',
    index: 0,
    component: (
      <View>
        <Animated.ScrollView>
          {Array.from({length: 100}, (_, i) => (
            <View
              key={i}
              style={{
                width: Dimensions.get('screen').width,
                backgroundColor: 'grey',
                padding: 20,
                marginTop: 20,
              }}>
              <Text>{i}</Text>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    ),
  },
  {
    title: 'Tab2',
    index: 1,
    component: (
      <View>
        <Animated.ScrollView>
          {Array.from({length: 100}, (_, i) => (
            <View
              key={i}
              style={{
                width: Dimensions.get('screen').width,
                backgroundColor: 'orange',
                padding: 20,
                marginTop: 20,
              }}>
              <Text>{i}</Text>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    ),
  },
  {
    title: 'Tab3',
    index: 2,
    component: (
      <View>
        <Animated.ScrollView>
          {Array.from({length: 100}, (_, i) => (
            <View
              key={i}
              style={{
                width: Dimensions.get('screen').width,
                backgroundColor: 'pink',
                padding: 20,
                marginTop: 20,
              }}>
              <Text>{i}</Text>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    ),
  },
];

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Index = () => {
  const [currentTab, setCurrentTab] = React.useState<TabItemProps>(TABLIST[0]);

  const handleTabChange = useCallback((event: any) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setCurrentTab(event.currentTab);
  });

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Tab
        tabList={TABLIST}
        onTabChange={handleTabChange}
        currentTab={currentTab}
      />
    </View>
  );
};

export default Index;
