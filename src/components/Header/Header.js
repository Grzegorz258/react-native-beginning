import React from 'react';
import { Text, View } from 'react-native';
import styles from './Header.styles';

const { header, title } = styles;

const Header = ({text}) => {
  return (
    <View style={header}>
          <Text style={title}>{text}</Text>
    </View>
  );
};

export default Header;
