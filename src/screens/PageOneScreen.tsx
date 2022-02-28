import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const PageOneScreen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1 Screen</Text>
      <Button
        title="Go Page Two"
        onPress={() => navigation.navigate('PageTwoScreen')}
      />
      <Text>Navigate with Args</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PersonScreen', {
            id: 1,
            name: 'Pedro',
          })
        }>
        <Text>Pedro</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PersonScreen', {
            id: 2,
            name: 'Pablo',
          })
        }>
        <Text>Pablo</Text>
      </TouchableOpacity>
    </View>
  );
};
