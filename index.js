/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';  //Why this heck import from here, because its decrlare only once no neee
//to each pages or scenes

AppRegistry.registerComponent(appName, () => App);
