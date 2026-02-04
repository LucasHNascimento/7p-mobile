import React from 'react';
import {Text, View, Image} from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Try editing me! 🎉</Text>
      <Text> Hey </Text>
      <Image
          source={require('./img/pou.png')}
          style={{width: 200, height: 200}}
        />
    </View>
  );
};

export default YourApp;