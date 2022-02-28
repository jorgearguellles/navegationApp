import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PageOneScreen} from '../screens/PageOneScreen';
import {PageTwoScreen} from '../screens/pageTwoScreen';
import {PageThreeScreen} from '../screens/PageThreeScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Title - PageOneScreen" component={PageOneScreen} />
      <Stack.Screen name="Title - PageTwoScreen" component={PageTwoScreen} />
      <Stack.Screen
        name="Title - PageThreeScreen"
        component={PageThreeScreen}
      />
    </Stack.Navigator>
  );
};
