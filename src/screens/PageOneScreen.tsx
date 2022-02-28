/* eslint-disable react-native/no-inline-styles */
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
      <Text style={styles.title}>Navigate with Args</Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            ...styles.bigBtn,
            backgroundColor: 'blue',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Pedro',
            })
          }>
          <Text style={styles.bigBtnText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.bigBtn,
            backgroundColor: 'orange',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Pablo',
            })
          }>
          <Text style={styles.bigBtnText}>Pablo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
