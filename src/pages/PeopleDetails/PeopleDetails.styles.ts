import { Dimensions, StyleSheet } from 'react-native';
import { colors, metrics } from '../../style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {},
  imageAvatar: {
    width: '100%',
    height: Dimensions.get('screen').height / 3,
  },
  body: {},
  content: {
    marginHorizontal: metrics.spaces.space16,
  },
  contentPeopleName: {
    marginTop: metrics.spaces.space32,
  },
  contentPeopleTrait: {
    marginTop: metrics.spaces.space16,
  },
  row: {
    flexDirection: 'row',
    marginTop: metrics.spaces.space16,
  },
  item: {
    marginRight: metrics.spaces.space16,
    paddingBottom: 100,
  },
  imageFilm: {
    width: 180,
    height: 260,
    marginBottom: metrics.spaces.space8,
    borderRadius: metrics.radius,
  },
});

export default styles;
