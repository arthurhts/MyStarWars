import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../../style';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: fonts.sizes.smaller,
    color: colors.white,
    textTransform: 'uppercase',
    marginTop: metrics.spaces.space8,
  },
});

export default styles;
