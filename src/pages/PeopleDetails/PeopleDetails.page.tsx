import React from 'react';
import { FlatList, Image, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from '../../atomic/atoms/Title/Title.atom';
import { PeopleTrait } from '../../atomic/molecules/PeopleTrait/PeopleTrait.molecule';
import { IFilm } from '../../store/modules/film/types';
import { metrics } from '../../style';
import styles from './PeopleDetails.styles';

const DATA: IFilm[] = [
  {
    episode_id: '1',
    title: 'Luke Skywalker 1',
  },
  {
    episode_id: '2',
    title: 'Luke Skywalker 1',
  },
  {
    episode_id: '3',
    title: 'Luke Skywalker 1',
  },
  {
    episode_id: '4',
    title: 'Luke Skywalker 1',
  },
  {
    episode_id: '5',
    title: 'Luke Skywalker 1',
  },
];

const PeopleDetails = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={{ uri: 'https://picsum.photos/1280/820' }}
          style={styles.imageAvatar}
        />
        <View style={styles.content}>
          <View style={styles.contentPeopleName}>
            <Title text="Star Wars" size="medium" />
            <Title text="Nome do personagem" size="big" />
          </View>
          <View style={styles.contentPeopleTrait}>
            <View style={styles.row}>
              <PeopleTrait
                textTitle="Ano Aniversário"
                textValue="19 BBY"
                styleContainer={{ marginRight: metrics.spaces.space32 }}
              />
              <PeopleTrait
                textTitle="Genero"
                textValue="Male"
                styleContainer={{ marginRight: metrics.spaces.space32 }}
              />
            </View>
            <View style={styles.row}>
              <PeopleTrait
                textTitle="Cor dos olhos"
                textValue="Blue"
                styleContainer={{ marginRight: metrics.spaces.space32 }}
              />
              <PeopleTrait
                textTitle="Peso"
                textValue="200"
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
          <FlatList
            data={DATA}
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
        </View>
      </ScrollView>
    </View>
  );
};

export { PeopleDetails };
