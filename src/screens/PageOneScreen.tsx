import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const PageOneScreen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Page 1 Screen</Text>
      <Button
        title="Go Page Two"
        onPress={() => navigation.navigate('PageTwoScreen')}
      />
    </View>
  );
};
