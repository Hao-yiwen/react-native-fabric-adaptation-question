import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

const Index = props => {
  return (
    <View style={styles.container}>
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
    </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Index;
