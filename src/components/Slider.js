import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slides from '../data';
import SlideItem from './SlideItem';

const Slider = () => {
  return (
    <View>
      <FlatList
        data={Slides}
        renderItem={({item}) => <SlideItem item={item} />}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
