/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Home from './src/Home';

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent(
  'AnimatedOfMeasureLayout',
  () => require('./src/pages/AnimatedOfMeasureLayout').default,
);
Navigation.registerComponent(
  'FlatListStuckAndStopped',
  () => require('./src/pages/FlatListStuckAndStopped').default,
);


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
});