import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Add from '.';
import {Text, View} from 'react-native';

storiesOf('Welcome', module).add('to Storybook', () => (
  <View>
    <Text>test</Text>
    <Add color="red" width={20} height={20} />
  </View>
));
