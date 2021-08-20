import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StatusBar, View } from 'react-native';
import { Assets } from '../../assets/Assets';
import {
  RootStackParamList,
  ScreensName,
} from '../../navigation/RootNavigator';
import { colors } from '../../style';
import styles from './SplashScreen.styles';

interface ISplashScrenProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    ScreensName.SplashScreenPage
  >;
}

const SplashScreen = ({ navigation }: ISplashScrenProps) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ScreensName.HomePage);
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Image source={Assets.logo.splash} />
    </View>
  );
};

export { SplashScreen };
