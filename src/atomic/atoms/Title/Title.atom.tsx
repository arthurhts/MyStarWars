import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

import styles from './Title.atom.styles';

interface ITitleProps {
  text: string;
  size: 'small' | 'medium' | 'big';
  styleContainer?: StyleProp<ViewStyle>;
}

const Title = ({ size, text, styleContainer }: ITitleProps) => {
  const fontSize = React.useMemo(() => {
    if (size === 'small') {
      return 12;
    } else if (size === 'medium') {
      return 16;
    } else {
      return 24;
    }
  }, [size]);

  return (
    <View style={styleContainer}>
      <Text style={{ ...styles.text, fontSize, lineHeight: fontSize + 4 }}>
        {text}
      </Text>
    </View>
  );
};

export { Title };
