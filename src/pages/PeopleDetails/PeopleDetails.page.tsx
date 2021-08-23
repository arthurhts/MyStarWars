import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  RootScreenNavigation,
  RootScreenRoute,
} from '../../navigation/RootNavigator';

import { ScreensName } from '../../navigation/ScreenName';
import { IState } from '../../store';
import { loadFilmRequest, resetFilm } from '../../store/modules/films/actions';
import { IFilm } from '../../store/modules/films/types';
import { Title } from '../../atomic/atoms/Title/Title.atom';
import { PeopleTrait } from '../../atomic/molecules/PeopleTrait/PeopleTrait.molecule';
import { colors, metrics } from '../../style';
import styles from './PeopleDetails.styles';
import { Favorites } from '../../atomic/molecules/Favorites/Favorites.molecule';

const PeopleDetails = () => {
  const dispatch = useDispatch();

  const films = useSelector<IState, IFilm[] | null>(state => state.films.data);
  const isLoadingFilms = useSelector<IState, boolean>(
    state => state.films.loading,
  );

  const { params } = useRoute<RootScreenRoute<ScreensName.DetailsPage>>();

  const { navigate } =
    useNavigation<RootScreenNavigation<ScreensName.DetailsPage>>();

  const goBack = React.useCallback(() => {
    navigate(ScreensName.HomePage);
  }, [navigate]);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(resetFilm());
      dispatch(loadFilmRequest(params.people.films));
    }, [dispatch, params.people]),
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <Pressable onPress={goBack} style={styles.btnBack}>
          <Icon name="arrowleft" size={30} color={colors.primary} />
        </Pressable>
        <Image
          source={{ uri: 'https://picsum.photos/1280/820' }}
          style={styles.imageAvatar}
        />
        <View style={styles.content}>
          <View style={styles.header}>
            <View>
              <Title text="Star Wars" size="medium" />
              <Title text={params.people?.name} size="big" />
            </View>
            <Favorites namePeople={params.people?.name} />
          </View>
          <View style={styles.contentPeopleTrait}>
            <View style={styles.row}>
              <PeopleTrait
                textTitle="Ano Aniversário"
                textValue={params.people?.birth_year}
                styleContainer={{ marginRight: metrics.spaces.space32 }}
              />
              <PeopleTrait
                textTitle="Genero"
                textValue={
                  params.people?.gender === 'Male' ? 'Masculino' : 'Feminino'
                }
                styleContainer={{ marginRight: metrics.spaces.space32 }}
              />
            </View>
            <View style={styles.row}>
              <PeopleTrait
                textTitle="Cor dos olhos"
                textValue={params.people?.eye_color}
                styleContainer={{ marginRight: metrics.spaces.space32 }}
              />
              <PeopleTrait
                textTitle="Peso"
                textValue={params.people?.mass}
                styleContainer={{ marginRight: metrics.spaces.space32 }}
              />
            </View>
          </View>
          <Title
            text="Filmes"
            size="big"
            styleContainer={{
              marginTop: metrics.spaces.space32,
              marginBottom: metrics.spaces.space16,
            }}
          />
          {isLoadingFilms ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={colors.white} />
            </View>
          ) : (
            <FlatList
              data={films}
              horizontal={true}
              renderItem={({ item }: { item: IFilm }) => (
                <View style={styles.item}>
                  <Image
                    source={{ uri: 'https://picsum.photos/100/200' }}
                    style={styles.imageFilm}
                  />
                  <Title text={item.title} size="small" />
                </View>
              )}
              keyExtractor={item => item.episode_id}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export { PeopleDetails };
