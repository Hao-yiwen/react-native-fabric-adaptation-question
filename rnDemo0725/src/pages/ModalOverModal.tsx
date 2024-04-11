import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';

const Index = () => {
  const [firstModalVisible, setFirstModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  const [thirdModalVisible, setThirdModalVisible] = useState(false);
  const [fourthModalVisible, setFourthModalVisible] = useState(false);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button
        title="Open Modal"
        onPress={() => {
          setFirstModalVisible(true);
        }}
      />
      <Modal visible={firstModalVisible} transparent>
        <Pressable
          style={{flex: 1}}
          onPress={() => {
            setFirstModalVisible(false);
          }}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TouchableWithoutFeedback
              style={{height: 500, backgroundColor: '#fff'}}>
              <View
                style={{
                  height: 500,
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  title="Open Second Modal"
                  onPress={() => {
                    setSecondModalVisible(true);
                  }}></Button>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Pressable>
      </Modal>

      <Modal visible={secondModalVisible} transparent>
        <Pressable
          style={{flex: 1}}
          onPress={() => {
            setSecondModalVisible(false);
          }}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TouchableWithoutFeedback
              style={{height: 400, backgroundColor: 'pink'}}>
              <View
                style={{
                  height: 400,
                  backgroundColor: 'pink',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  title="Open Third Modal"
                  onPress={() => {
                    setThirdModalVisible(true);
                  }}></Button>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Pressable>
      </Modal>

      <Modal visible={thirdModalVisible} transparent>
        <Pressable
          style={{flex: 1}}
          onPress={() => {
            setThirdModalVisible(false);
          }}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TouchableWithoutFeedback
              style={{height: 300, backgroundColor: 'green'}}>
              <View
                style={{
                  height: 300,
                  backgroundColor: 'green',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  title="Open Fourth Modal"
                  onPress={() => {
                    setFourthModalVisible(true);
                  }}></Button>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Pressable>
      </Modal>

      <Modal visible={fourthModalVisible} transparent>
        <Pressable
          style={{flex: 1}}
          onPress={() => {
            setFourthModalVisible(false);
          }}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TouchableWithoutFeedback
              style={{height: 200, backgroundColor: 'pink'}}>
              <View
                style={{
                  height: 200,
                  backgroundColor: 'orange',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  title="Close Fourth Modal"
                  onPress={() => {
                    setFourthModalVisible(false);
                  }}></Button>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

Index.options = {
  topBar: {
    title: {
      text: 'Modal Over Modal',
    },
  },
};

export default Index;
