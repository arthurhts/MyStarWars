import React from 'react';
import { Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../../store';
import {
  addPeopleFavorites,
  removePeopleFavorites,
} from '../../../store/modules/peoplesFavorites/actions';
import { colors } from '../../../style';
import styles from './Favorites.molecule.styles';

interface ITitleProps {
  namePeople: string;
}

const Favorites = ({ namePeople }: ITitleProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector<IState, string[]>(
    state => state.peoplesFavorites.favorites,
  );

  const favorite = React.useMemo(
    () => favorites.some(item => item === namePeople),
    [favorites, namePeople],
  );

  const handleAddFavorite = React.useCallback(() => {
    dispatch(addPeopleFavorites(namePeople));
  }, [dispatch, namePeople]);

  const handleRemoveFavorite = React.useCallback(() => {
    dispatch(removePeopleFavorites(namePeople));
  }, [dispatch, namePeople]);

  return (
    <Pressable
      style={{ ...styles.container }}
      onPress={() => (favorite ? handleRemoveFavorite() : handleAddFavorite())}>
      {favorite ? (
        <Icon name="star" size={30} color={colors.warning} />
      ) : (
        <Icon name="staro" size={30} color={colors.warning} />
      )}
      <Text style={{ ...styles.text }}>Favorito</Text>
    </Pressable>
  );
};

export { Favorites };
