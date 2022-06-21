import React from 'react';
import Home from './src/screens/Home';

import { LogBox, SafeAreaView } from "react-native";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
])

const App = () => {

  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  )
};

export default App;
