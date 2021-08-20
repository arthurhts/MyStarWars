import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.spaces.space16,
    backgroundColor: colors.primary,
  },
  body: {},
});

export default styles;
