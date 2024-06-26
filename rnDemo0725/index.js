/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Home from './src/Home';
import { NativeModules } from 'react-native';

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent(
  'AnimatedOfMeasureLayout',
  () => require('./src/pages/AnimatedOfMeasureLayout').default,
);
Navigation.registerComponent(
  'FlatListStuckAndStopped',
  () => require('./src/pages/FlatListStuckAndStopped').default,
);

Navigation.registerComponent(
  'SectionListRefInvlid',
  () => require('./src/pages/SectionListRefInvlid').default,
);

Navigation.registerComponent(
  'ModalOverModal',
  () => require('./src/pages/ModalOverModal').default,
);

Navigation.registerComponent(
  'FlatlistInScrollview',
  () => require('./src/pages/FlatlistInScrollview').default,
);

Navigation.registerComponent(
  'TextInputInvalid',
  () => require('./src/pages/TextInputInvalid').default,
);

Navigation.registerComponent(
  'AnimatedTranslate',
  () => require('./src/pages/AnimatedTranslate').default,
);

Navigation.registerComponent(
  'TextInView',
  () => require('./src/pages/TextInView').default,
);

Navigation.registerComponent(
  'StickyHeaderIndices',
  () => require('./src/pages/StickyHeaderIndices').default,
);

Navigation.registerComponent(
  'LayoutAnimation',
  () => require('./src/pages/LayoutAnimation').default,
);

Navigation.registerComponent(
  'AnimatedBackgroundColor',
  () => require('./src/pages/AnimatedBackgroundColor').default,
);

Navigation.registerComponent(
  'AnimatedDriverJsOrNative',
  () => require('./src/pages/AnimatedDriverJsOrNative').default,
);

Navigation.registerComponent(
  'TabScrollview',
  () => require('./src/pages/TabScrollview').default,
);

Navigation.registerComponent(
  'ManyElements',
  () => require('./src/pages/ManyElements').default,
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
