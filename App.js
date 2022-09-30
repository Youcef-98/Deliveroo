import {StyleSheet, Text, View} from 'react-native';

import RootApp from './RootApp';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {store} from './src/Redux/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootApp />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
