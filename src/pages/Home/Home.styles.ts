import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    paddingHorizontal: metrics.spaces.space16,
    paddingVertical: metrics.spaces.space16,
  },
  body: {
    paddingHorizontal: metrics.spaces.space16,
  },
  imageHeader: {
    resizeMode: 'contain',
    width: '100%',
  },
  imageAvatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: metrics.spaces.space16,
  },
  textItem: {
    color: colors.white,
    paddingLeft: metrics.spaces.space16,
  },
});

export default styles;
