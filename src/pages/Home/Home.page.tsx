import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Assets } from '../../assets/Assets';
import { Container } from '../../atomic/atoms/Container/Container.atom';
import { Title } from '../../atomic/atoms/Title/Title.atom';
import { RootScreenNavigation } from '../../navigation/RootNavigator';
import { ScreensName } from '../../navigation/ScreenName';
import { IState } from '../../store';
import {
  loadPeopleRequest,
  resetPeople,
} from '../../store/modules/peoples/actions';
import { IPeople } from '../../store/modules/peoples/types';
import { colors } from '../../style';
import styles from './Home.styles';

const Home = () => {
  const dispatch = useDispatch();

  const { navigate } =
    useNavigation<RootScreenNavigation<ScreensName.DetailsPage>>();

  const peoples = useSelector<IState, IPeople[] | null>(
    state => state.peoples.data,
  );
  const isLoading = useSelector<IState, boolean>(
    state => state.peoples.loading,
  );

  const totalPeoples = useSelector<IState, number>(
    state => state.peoples.total,
  );

  const totalLoadedPeoples = useSelector<IState, number>(
    state => state.peoples.totalLoaded,
  );

  React.useEffect(() => {
    dispatch(loadPeopleRequest());
  }, [dispatch]);

  const goToDetailsPeople = React.useCallback(
    people => {
      navigate(ScreensName.DetailsPage, { people });
    },
    [navigate],
  );

  const loadNextPage = React.useCallback(() => {
    dispatch(loadPeopleRequest());
  }, [dispatch]);

  const shouldNextPage = React.useMemo(
    () => !isLoading && totalLoadedPeoples < totalPeoples,
    [isLoading, totalLoadedPeoples, totalPeoples],
  );

  const renderFooter = () => {
    if (!isLoading) {
      return null;
    }

    return (
      <View>
        <ActivityIndicator size="large" color={colors.white} />
      </View>
    );
  };

  const handleRefresh = React.useCallback(() => {
    dispatch(resetPeople());
    dispatch(loadPeopleRequest());
  }, [dispatch]);

  return (
    <Container>
      <SafeAreaView>
        <View style={styles.header}>
          <Image source={Assets.logo.header} style={styles.imageHeader} />
        </View>
        <View style={styles.body}>
          <FlatList
            data={peoples}
            contentContainerStyle={styles.contentFlatList}
            onEndReached={() => shouldNextPage && loadNextPage()}
            onEndReachedThreshold={0.1}
            refreshing={isLoading}
            onRefresh={handleRefresh}
            ListFooterComponent={renderFooter}
            renderItem={({ item }: { item: IPeople }) => (
              <Pressable
                onPress={() => goToDetailsPeople(item)}
                style={styles.item}>
                <Image
                  source={{ uri: 'https://picsum.photos/200/200' }}
                  style={styles.imageAvatar}
                />
                <View style={styles.containerText}>
                  <Title text={item.name} size="medium" />
                  <Text style={styles.textItem}>{item.birth_year}</Text>
                </View>
              </Pressable>
            )}
            keyExtractor={item => item.name}
          />
        </View>
      </SafeAreaView>
    </Container>
  );
};

export { Home };
