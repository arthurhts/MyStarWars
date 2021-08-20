import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Home } from '../pages/Home/Home.page';
import { PeopleDetails } from '../pages/PeopleDetails/PeopleDetails.page';
import { SplashScreen } from '../pages/SplashScreen/SplashScreen';

export enum ScreensName {
  HomePage = 'HomePage',
  SplashScreenPage = 'SplashScreenPage',
  DetailsPage = 'DetailsPage',
}

export type RootStackParamList = {
  HomePage: undefined;
  SplashScreenPage: undefined;
  DetailsPage: {
    id: string;
  };
};

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
