import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import * as React from 'react';
import { Home } from '../pages/Home/Home.page';
import { PeopleDetails } from '../pages/PeopleDetails/PeopleDetails.page';
import { SplashScreen } from '../pages/SplashScreen/SplashScreen';
import { IPeople } from '../store/modules/peoples/types';
import { ScreensName } from './ScreenName';

export type RootStackParamList = {
  HomePage: undefined;
  SplashScreenPage: undefined;
  DetailsPage: {
    people: IPeople;
  };
};

export type RootScreenNavigation<RouteName extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, RouteName>;

export type RootScreenRoute<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

export type RootScreenProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator
      initialRouteName={ScreensName.SplashScreenPage}
      screenOptions={{ headerShown: false }}>
      <Screen name={ScreensName.SplashScreenPage} component={SplashScreen} />
      <Screen name={ScreensName.HomePage} component={Home} />
      <Screen name={ScreensName.DetailsPage} component={PeopleDetails} />
    </Navigator>
  );
};
