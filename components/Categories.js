// Categories.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Categories = ({ categoryName, onPress, isSelected }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, isSelected && styles.selected]}>
      <Text onPress={onPress} style={[isSelected && styles.selected]}>
        {categoryName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    backgroundColor: '#ddd',
    borderRadius: 20,
  },
  selected: {
    backgroundColor: 'black',
    color: 'white',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Categories;
