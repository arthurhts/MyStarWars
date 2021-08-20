import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../style';

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
});

export default styles;
