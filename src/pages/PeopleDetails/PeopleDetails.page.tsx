import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { colors } from '../../style';

import styles from './PeopleDetails.styles';

const PeopleDetails = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://picsum.photos/1280/720' }}
          style={styles.imageAvatar}
        />
      </View>
      <Text>teste</Text>
    </View>
  );
};

export { PeopleDetails };
