import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
  Pressable,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  Animated,
  RefreshControl,
} from 'react-native';
import TabScrollview from './TabScrollview';

const DATA: {id: string; title: string; type: number}[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    type: 1,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    type: 2,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    type: 3,
  },
  {
    id: '4e8b4e8b-8b4e-8b4e-8b4e-8b4e8b4e8b4e',
    title: 'Fourth Item',
    type: 4,
  },
  {
    id: '5e8b5e8b-8b5e-8b5e-8b5e-8b5e8b5e8b5e',
    title: 'Fifth Item',
    type: 5,
  },
  {
    id: '6e8b6e8b-8b6e-8b6e-8b6e-8b6e8b6e8b6e',
    title: 'Sixth Item',
    type: 6 % 11,
  },
  {
    id: '7e8b7e8b-8b7e-8b7e-8b7e-8b7e8b7e8b7e',
    title: 'Seventh Item',
    type: 7 % 11,
  },
  {
    id: '8e8b8e8b-8b8e-8b8e-8b8e-8b8e8b8e8b8e',
    title: 'Eighth Item',
    type: 8 % 11,
  },
  {
    id: '9e8b9e8b-8b9e-8b9e-8b9e-8b9e8b9e8b9e',
    title: 'Ninth Item',
    type: 9 % 11,
  },
  {
    id: '10e8b10e8b-10e8b-10e8b-10e8b-10e8b10e8b',
    title: 'Tenth Item',
    type: 10 % 11,
  },
  {
    id: '11e8b11e8b-11e8b-11e8b-11e8b-11e8b11e8b',
    title: 'Eleventh Item',
    type: 11 % 11,
  },
  {
    id: '12e8b12e8b-12e8b-12e8b-12e8b-12e8b12e8b',
    title: 'Twelfth Item',
    type: 12 % 11,
  },
  {
    id: '13e8b13e8b-13e8b-13e8b-13e8b-13e8b13e8b',
    title: 'Thirteenth Item',
    type: 13 % 11,
  },
  {
    id: '14e8b14e8b-14e8b-14e8b-14e8b-14e8b14e8b',
    title: 'Fourteenth Item',
    type: 14 % 11,
  },
  {
    id: '15e8b15e8b-15e8b-15e8b-15e8b-15e8b15e8b',
    title: 'Fifteenth Item',
    type: 15 % 11,
  },
  {
    id: '16e8b16e8b-16e8b-16e8b-16e8b-16e8b16e8b',
    title: 'Sixteenth Item',
    type: 16 % 11,
  },
  {
    id: '17e8b17e8b-17e8b-17e8b-17e8b-17e8b17e8b',
    title: 'Seventeenth Item',
    type: 17 % 11,
  },
  {
    id: '18e8b18e8b-18e8b-18e8b-18e8b-18e8b18e8b',
    title: 'Eighteenth Item',
    type: 18 % 11,
  },
  {
    id: '19e8b19e8b-19e8b-19e8b-19e8b-19e8b19e8b',
    title: 'Nineteenth Item',
    type: 19 % 11,
  },
  {
    id: '20e8b20e8b-20e8b-20e8b-20e8b-20e8b20e8b',
    title: 'Twentieth Item',
    type: 20 % 11,
  },
];

const Index = () => {
  const [tabVisiable, setTabVisiable] = useState(false);
  const [easyModalVisible, setEasyModalVisible] = useState(false);
  const [thirdModalVisible, setThirdModalVisible] = useState(false);
  const [fourthModalVisible, setFourthModalVisible] = useState(false);
  const [fifthModalVisible, setFifthModalVisible] = useState(false);
  const [sixthModalVisible, setSixthModalVisible] = useState(false);
  const [seventhModalVisible, setSeventhModalVisible] = useState(false);
  const [eighthModalVisible, setEighthModalVisible] = useState(false);
  const [ninthModalVisible, setNinthModalVisible] = useState(false);
  const [tenthModalVisible, setTenthModalVisible] = useState(false);
  const flatListRef = React.useRef(null);
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const renderItem = (item: {type: number; id: string; title: string}) => {
    if (item.type === 0) {
      return (
        <Pressable
          onPress={() => setTabVisiable(true)}
          style={{
            padding: 10,
            backgroundColor: 'yellow',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Text>Pressable0</Text>
        </Pressable>
      );
    } else if (item.type === 1) {
      return (
        <Pressable
          onPress={() => setEasyModalVisible(true)}
          style={{
            padding: 10,
            backgroundColor: 'yellow',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Text>Pressable1</Text>
        </Pressable>
      );
    } else if (item.type === 2) {
      return (
        <Pressable
          onPress={() => setThirdModalVisible(true)}
          style={{
            padding: 10,
            backgroundColor: 'yellow',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Text>Pressable2</Text>
        </Pressable>
      );
    } else if (item.type === 3) {
      return (
        <Pressable
          onPress={() => setFourthModalVisible(true)}
          style={{
            padding: 10,
            backgroundColor: 'yellow',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Text>Pressable3</Text>
        </Pressable>
      );
    } else if (item.type === 4) {
      return (
        <Pressable
          onPress={() => setFifthModalVisible(true)}
          style={{
            padding: 10,
            backgroundColor: 'yellow',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Text>Pressable4</Text>
        </Pressable>
      );
    } else if (item.type === 5) {
      return (
        <Pressable
          onPress={() => setSixthModalVisible(true)}
          style={{
            padding: 10,
            backgroundColor: 'yellow',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Text>Pressable5</Text>
        </Pressable>
      );
    } else if (item.type === 6) {
      return (
        <Pressable
          onPress={() => setSeventhModalVisible(true)}
          style={{
            padding: 10,
            backgroundColor: 'yellow',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Text>Pressable6</Text>
        </Pressable>
      );
    } else if (item.type === 7) {
      return (
        <Pressable
          onPress={() => setEighthModalVisible(true)}
          style={{
            padding: 10,
            backgroundColor: 'yellow',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Text>Pressable7</Text>
        </Pressable>
      );
    } else if (item.type === 8) {
      return (
        <Pressable
          onPress={() => setNinthModalVisible(true)}
          style={{
            padding: 10,
            backgroundColor: 'yellow',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Text>Pressable8</Text>
        </Pressable>
      );
    } else if (item.type === 9) {
      return (
        <Pressable
          onPress={() => setTenthModalVisible(true)}
          style={{
            padding: 10,
            backgroundColor: 'yellow',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Text>Pressable9</Text>
        </Pressable>
      );
    } else {
      return (
        <Pressable
          onPress={() => setTabVisiable(true)}
          style={{
            padding: 10,
            backgroundColor: 'yellow',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Text>Pressable</Text>
        </Pressable>
      );
    }
  };

  return (
    <View style={{flex: 1, marginTop: 20}}>
      {/* 
      @description 头部区域
       */}
      <View
        style={{
          marginTop: 10,
          marginBottom: 10,
          alignItems: 'center',
          backgroundColor: 'skyblue',
        }}>
        <Text style={{marginBottom: 10}}>头部区域</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          {/* <TouchableOpacity
            onPress={() =>
              // global.currentApp.currentPage.pop()
              {

              }
            }>
            <Text>返回</Text>
          </TouchableOpacity> */}
          <Button title="Open Modal" onPress={() => setTabVisiable(true)} />
          <View style={{marginLeft: 20}}>
            <Button
              title="Open Easy Modal"
              onPress={() => setEasyModalVisible(true)}
            />
          </View>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Animated.ScrollView
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          style={{
            width: Dimensions.get('screen').width * 0.3,
            backgroundColor: 'yellow',
            overflow: 'hidden',
            marginRight: 10,
          }}>
          <Image
            style={{
              height: 40,
              margin: 10,
            }}
            source={{
              uri:
                'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
            }}
          />
          {/* <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae;
          </Text> */}
          {Array.from({length: 20}).map((_, index) => (
            <Pressable
              key={index}
              onPress={() => {
                flatListRef.current?.scrollToIndex({
                  index: index,
                  animated: true,
                });
              }}
              style={{
                margin: 10,
                padding: 10,
                backgroundColor: 'pink',
                borderRadius: 10,
              }}>
              <Text>Pressable{index}</Text>
            </Pressable>
          ))}
        </Animated.ScrollView>
        <FlatList
          refreshing={false}
          onRefresh={() => {
            console.log('refreshing');
          }}
          ref={flatListRef}
          data={DATA}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {
                console.log('refreshing');
              }}
            />
          }
          renderItem={({item}) => (
            <View
              style={{
                height: 80,
                backgroundColor: 'red',
                marginBottom: 10,
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  jusitifyContent: 'center',
                }}>
                <Image
                  style={{height: 40, width: 40, marginLeft: 20}}
                  source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                />
                <View style={{marginLeft: 40}}>
                  <Text>{item.title}</Text>
                  {renderItem(item)}
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
          style={{
            width: Dimensions.get('screen').width * 0.7,
            backgroundColor: 'green',
          }}>
          {/* <Text>
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
            consequat ac nisl at, Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed
            euismod, nunc id aliquam ultricies, Nunc tellus sem, consequat ac
            nisl at, Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla facilisi. Sed euismod, nunc id
            aliquam ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nulla facilisi. Sed euismod, nunc id aliquam
            ultricies, Nunc tellus sem, consequat ac nisl at, Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Sed euismod, nunc id aliquam ultricies, Nunc
            tellus sem, consequat ac nisl at, Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Sed euismod, nunc id aliquam ultricies, Nunc tellus sem,
          </Text>
          <Image
            source={{
              uri: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
            }}
            style={{
              width: Dimensions.get('window').width - 20,
              height: 100,
              margin: 10,
            }}
          /> */}
        </FlatList>
      </View>
      <View
        style={{
          height: 70,
          position: 'fixed',
          window: Dimensions.get('screen').width,
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingRight: 20,
        }}>
        <TouchableOpacity
          style={{marginLeft: 40}}
          onPress={() => {
            setTabVisiable(true);
          }}>
          <View
            style={{padding: 10, backgroundColor: 'orange', borderRadius: 10}}>
            <Text>点击下一步</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal visible={easyModalVisible} transparent>
        <View style={{flex: 1, height: 300}}>
          <Pressable
            onPress={() => {
              setEasyModalVisible(false);
            }}
            style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              <TouchableWithoutFeedback>
                <View style={{height: 300}}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'white',
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 30, marginTop: 6}}>弹窗头部</Text>
                    <Text>1. 这是一个简单的弹窗，点击空白处关闭弹窗</Text>
                    <TabScrollview />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </Pressable>
        </View>
      </Modal>
      <Modal visible={tabVisiable} transparent>
        <Pressable
          onPress={() => {
            setTabVisiable(false);
          }}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <TouchableWithoutFeedback>
              <View style={{height: 500, backgroundColor: 'white'}}>
                <ScrollView style={{flex: 1}}>
                  <View
                    style={{
                      height: 50,
                      backgroundColor: 'white',
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 30, marginTop: 6}}>弹窗头部</Text>
                  </View>
                  <View style={{padding: 10, height: 300}}>
                    <TabScrollview />
                  </View>
                  <Image
                    style={{
                      width: Dimensions.get('window').width - 20,
                      height: 100,
                      margin: 10,
                    }}
                    source={{
                      uri:
                        'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
                    }}
                  />
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Pressable>
      </Modal>
      <Modal visible={thirdModalVisible} transparent>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: 600,
              backgroundColor: 'white',
              width: Dimensions.get('screen').width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>123123</Text>
            <Button title="Close" onPress={() => setThirdModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Modal visible={fourthModalVisible} transparent>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: 600,
              backgroundColor: 'white',
              width: Dimensions.get('screen').width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>123123</Text>
            <Button
              title="Close"
              onPress={() => setFourthModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
      <Modal visible={fifthModalVisible} transparent>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: 600,
              backgroundColor: 'white',
              width: Dimensions.get('screen').width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>123123</Text>
            <Button title="Close" onPress={() => setFifthModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Modal visible={sixthModalVisible} transparent>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: 600,
              backgroundColor: 'white',
              width: Dimensions.get('screen').width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>123123</Text>
            <Button title="Close" onPress={() => setSixthModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Modal visible={seventhModalVisible} transparent>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: 600,
              backgroundColor: 'white',
              width: Dimensions.get('screen').width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>123123</Text>
            <Button
              title="Close"
              onPress={() => setSeventhModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
      <Modal visible={eighthModalVisible} transparent>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: 600,
              backgroundColor: 'white',
              width: Dimensions.get('screen').width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>123123</Text>
            <Button
              title="Close"
              onPress={() => setEighthModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
      <Modal visible={ninthModalVisible} transparent>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: 600,
              backgroundColor: 'white',
              width: Dimensions.get('screen').width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>123123</Text>
            <Button title="Close" onPress={() => setNinthModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Modal visible={tenthModalVisible} transparent>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: 600,
              backgroundColor: 'white',
              width: Dimensions.get('screen').width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>123123</Text>
            <Button title="Close" onPress={() => setTenthModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Index;
