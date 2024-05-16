/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { useColorScheme } from 'react-native';
import {LightTheme,DarkTheme} from './asserts/utilities/colors'
import {  Provider as PaperProvider } from 'react-native-paper';


  export default function Main() {
    const scheme = useColorScheme();
    return (
      <PaperProvider theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <App></App>
      </PaperProvider>
    );
  }
AppRegistry.registerComponent(appName, () =>Main);





