import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Color} from '../GlobalStyles';

const SelectCategory = () => {
  return (
    <View style={styles.selectCategory}>
      <View style={styles.selectCategoryChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  selectCategoryChild: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: Color.colorGainsboro,
    width: 360,
    height: 57,
  },
  selectCategory: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: '100%',
    height: 640,
    overflow: 'hidden',
  },
});

export default SelectCategory;
