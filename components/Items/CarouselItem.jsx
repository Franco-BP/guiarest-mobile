import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const CarouselItem = ({title, imageLink}) => {
  const dimensionsHeight = Dimensions.get('window').height;
  const dimensionsWidth = Dimensions.get('window').width;

  const styles = StyleSheet.create({
    item: {
      backgroundColor: '#fff',
      marginBottom: 8,
    },
    titleBackground: {
      height: 60,
      backgroundColor: '#000000c0',
      justifyContent: 'flex-start',
    },  
    title: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 2,
    },
    logo: {
      width: dimensionsWidth,
      height: dimensionsHeight/4,
      justifyContent: 'flex-end'
    }
  })

  return (
    <View style={styles.item}>
      <ImageBackground style={styles.logo} source={{uri: imageLink}}>
        <View style={styles.titleBackground}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CarouselItem;