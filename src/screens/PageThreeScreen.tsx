import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const PageThreeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 3 Screen</Text>
      <Button title="Go Back" onPress={() => navigation.pop()} />
      <Button title="Go Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
