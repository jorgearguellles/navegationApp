import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/StackNavigator';

interface RoutesParams {
  id: number;
  name: string;
}

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = ({route, navigation}: Props) => {
  // console.log(props);
  // console.log(JSON.stringify(props, null, 3));
  // How get params?
  // Dirty way:
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);
  // Clear way:
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> {JSON.stringify(params, null, 3)} </Text>
      {/* <Text>{JSON.stringify(props, null, 3)}</Text> */}
    </View>
  );
};
