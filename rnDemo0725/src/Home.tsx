import React from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {Navigation} from 'react-native-navigation';

const Index = props => {
  return (
    <ScrollView style={styles.container}>
      <Button
        title="AnimatedOfMeasureLayoutInValid"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'AnimatedOfMeasureLayout',
              passProps: {
                text: 'Pushed screen',
              },
            },
          })
        }
      />
      <View style={{marginTop: 20}}>
        <Button
          title="FlatListStuckAndStopped"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'FlatListStuckAndStopped',
                passProps: {
                  text: 'Pushed screen',
                },
              },
            })
          }
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="SectionListRefInvlid"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'SectionListRefInvlid',
                passProps: {
                  text: 'Pushed screen',
                },
              },
            })
          }
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="ModalOverModal"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'ModalOverModal',
                passProps: {
                  text: 'Pushed screen',
                },
              },
            })
          }
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="FlatlistInScrollview"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'FlatlistInScrollview',
                passProps: {
                  text: 'Pushed screen',
                },
              },
            })
          }
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="TextInputInvalid"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'TextInputInvalid',
                passProps: {
                  text: 'TextInputInvalid',
                },
              },
            })
          }
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="AnimatedTranslate"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'AnimatedTranslate',
                passProps: {
                  text: 'AnimatedTranslate',
                },
              },
            })
          }
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="TextInView"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'TextInView',
                passProps: {
                  text: 'TextInView',
                },
              },
            })
          }
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="StickyHeaderIndices"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'StickyHeaderIndices',
                passProps: {
                  text: 'StickyHeaderIndices',
                },
              },
            })
          }
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="LayoutAnimation"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'LayoutAnimation',
                passProps: {
                  text: 'LayoutAnimation',
                },
              },
            })
          }
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="AnimatedBackgroundColor"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'AnimatedBackgroundColor',
                passProps: {
                  text: 'AnimatedBackgroundColor',
                },
              },
            })
          }
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="AnimatedDriverJsOrNative"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'AnimatedDriverJsOrNative',
                passProps: {
                  text: 'AnimatedDriverJsOrNative',
                },
              },
            })
          }
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="TabScrollview"
          onPress={() => {
            Navigation.push(props.componentId, {
              component: {
                name: 'TabScrollview',
                passProps: {
                  text: 'TabScrollview',
                },
              },
            });
          }}></Button>
      </View>
    </ScrollView>
  );
};

Index.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default Index;
