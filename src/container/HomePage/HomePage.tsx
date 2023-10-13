import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'native-base';

const HomePage = ({navigation}: {navigation: any}): JSX.Element => {
  return (
    <View>
      <Text>Home Page</Text>
      <Button onPress={() => navigation.push('Details')}>新燒局</Button>
    </View>
  );
};

export default HomePage;
