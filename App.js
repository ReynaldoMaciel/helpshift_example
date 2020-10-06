import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import Helpshift from 'helpshift-react-native';

const App = () => {
  useEffect(() => {
    Helpshift.init(
      'c8401d63eb823aeba5bfa825442f2ae9',
      'wine.helpshift.com',
      'wine_platform_20200828114507315-bc0f7ebcbf4a2c7',
    );
    setTimeout(() => {
      Helpshift.login({
        email: 'test@test.com',
        name: 'test',
      });
    }, 3000);
    setTimeout(() => {
      Helpshift.showConversation();
    }, 6000);
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>Engine: Hermes</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
