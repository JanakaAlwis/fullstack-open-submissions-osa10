import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 10,
  },
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;
