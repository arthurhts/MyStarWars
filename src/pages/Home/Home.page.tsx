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
import { loadPeopleRequest } from '../../store/modules/people/actions';
import { IPeople } from '../../store/modules/people/types';
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
    console.log('carregar');
    dispatch(loadPeopleRequest());
  }, [dispatch]);

  const renderFooter = () => {
    if (isLoading) return null;

    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  };

  return (
    <Container>
      <SafeAreaView>
        <View style={styles.header}>
          <Image source={Assets.logo.header} style={styles.imageHeader} />
        </View>
        <View style={styles.body}>
          {isLoading && <Text>Carregando</Text>}
          <FlatList
            data={peoples}
            style={{ flexGrow: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            onEndReached={loadNextPage}
            onEndReachedThreshold={0.1}
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
