import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../style';

const styles = StyleSheet.create({
  container: {
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
  containerText: {
    marginLeft: metrics.spaces.space16,
  },
  textItem: {
    color: colors.white,
  },
  contentFlatList: {
    flexGrow: 1,
    paddingBottom: 280,
  },
});

export default styles;
