import React from 'react';
import { View } from 'react-native';

import styles from './Container.atom.styles';

interface IContainerAtomProps {
  children: React.ReactNode;
}

const Container = ({ children }: IContainerAtomProps) => {
  return <View style={styles.container}>{children}</View>;
};

export { Container };
