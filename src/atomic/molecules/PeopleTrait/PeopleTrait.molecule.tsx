import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { Title } from '../../atoms/Title/Title.atom';

import styles from './PeopleTrait.molecule.styles';

interface ITitleProps {
  textTitle: string;
  textValue: string;
  styleContainer?: StyleProp<ViewStyle>;
}

const PeopleTrait = ({ textTitle, textValue, styleContainer }: ITitleProps) => {
  return (
    <View style={styleContainer}>
      <Title text={textTitle} size="small" />
      <Text style={{ ...styles.text }}>{textValue}</Text>
    </View>
  );
};

export { PeopleTrait };
