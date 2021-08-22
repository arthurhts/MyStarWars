import { useFocusEffect } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Assets } from '../../assets/Assets';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { ScreensName } from '../../navigation/ScreenName';
import { resetPeople } from '../../store/modules/people/actions';
import styles from './SplashScreen.styles';

interface ISplashScrenProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    ScreensName.SplashScreenPage
  >;
}

const SplashScreen = ({ navigation }: ISplashScrenProps) => {
  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      dispatch(resetPeople());
      setTimeout(() => {
        navigation.navigate(ScreensName.HomePage);
      }, 3000);
    }, [navigation, dispatch]),
  );

  return (
    <View style={styles.container}>
      <Image source={Assets.logo.splash} />
    </View>
  );
};

export { SplashScreen };
