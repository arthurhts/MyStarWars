import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Assets } from '../../assets/Assets';
import {
  RootStackParamList,
  ScreensName,
} from '../../navigation/RootNavigator';
import { IPeople } from '../../store/modules/people/types';
import { colors } from '../../style';

import styles from './Home.styles';

const DATA: IPeople[] = [
  {
    name: 'Luke Skywalker 1',
    gender: 'male',
    eye_color: 'Blue',
    birth_year: '19BBY',
  },
  {
    name: 'Luke Skywalker 2',
    gender: 'male',
    eye_color: 'Blue',
    birth_year: '19BBY',
  },
  {
    name: 'Luke Skywalker 3',
    gender: 'male',
    eye_color: 'Blue',
    birth_year: '19BBY',
  },
  {
    name: 'Luke Skywalker 4',
    gender: 'male',
    eye_color: 'Blue',
    birth_year: '19BBY',
  },
  {
    name: 'Luke Skywalker 5',
    gender: 'male',
    eye_color: 'Blue',
    birth_year: '19BBY',
  },
  {
    name: 'Luke Skywalker 6',
    gender: 'male',
    eye_color: 'Blue',
    birth_year: '19BBY',
  },
];

interface IHomeScrenProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    ScreensName.SplashScreenPage
  >;
}

const Home = ({ navigation }: IHomeScrenProps) => {
  const goToDetailsPeople = React.useCallback(() => {
    navigation.navigate(ScreensName.DetailsPage, { id: '1' });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.header}>
        <Image source={Assets.logo.header} style={styles.imageHeader} />
      </View>
      <View style={styles.body}>
        <FlatList
          data={DATA}
          renderItem={({ item }: { item: IPeople }) => (
            <Pressable onPress={goToDetailsPeople} style={styles.item}>
              <Image
                source={{ uri: 'https://picsum.photos/200/200' }}
                style={styles.imageAvatar}
              />
              <View>
                <Text style={styles.textItem}>{item.name}</Text>
                <Text style={styles.textItem}>{item.birth_year}</Text>
              </View>
            </Pressable>
          )}
          keyExtractor={item => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

export { Home };
