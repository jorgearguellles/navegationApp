import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

export const PageTwoScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: '',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 2 Screen</Text>
      <Button
        title="Go Page Three"
        onPress={() => navigation.navigate('PageThreeScreen')}
      />
    </View>
  );
};
