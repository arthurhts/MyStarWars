import { useFocusEffect } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, View } from 'react-native';
import { Assets } from '../../assets/Assets';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { ScreensName } from '../../navigation/ScreenName';
import styles from './SplashScreen.styles';

interface ISplashScrenProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    ScreensName.SplashScreenPage
  >;
}

const SplashScreen = ({ navigation }: ISplashScrenProps) => {
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        navigation.navigate(ScreensName.HomePage);
      }, 3000);
    }, [navigation]),
  );

  return (
    <View style={styles.container}>
      <Image source={Assets.logo.splash} />
    </View>
  );
};

export { SplashScreen };
