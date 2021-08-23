import { Dimensions, StyleSheet } from 'react-native';
import { colors, metrics } from '../../style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    marginTop: metrics.spaces.space32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageAvatar: {
    width: '100%',
    height: Dimensions.get('screen').height / 3,
  },
  body: {},
  content: {
    marginHorizontal: metrics.spaces.space16,
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
  btnBack: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    borderRadius: 40,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  loadingContainer: {
    flex: 1,
  },
});

export default styles;
