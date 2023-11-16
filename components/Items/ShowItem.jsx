import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

const ShowItem = ({item, componentId}) => {
  const dimensionsWidth = Dimensions.get('window').width;

  // Assignemnt of the props received.
  const title = item.title;
  const imageLink = item.imageLink;

  const HandleNavigation = () => {
    Navigation.push(componentId, {
      component: {
        name: 'Show', // Push the screen registered with the 'Restaurant' key
        options: { // Optional options object to configure the screen
          topBar: {
            title: {
              text: title // Set the TopBar title of the new Screen
            }
          }
        },
        passProps: {
          item: item,
          componentId: componentId,
        }
      }
    });
  };

  const styles = StyleSheet.create({
    item: {
      backgroundColor: 'transparent',
      paddingLeft: dimensionsWidth/20,
      marginVertical: 8,
    },
    logo: {
      height: 250,
      width: 141,
      justifyContent: 'flex-end',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
    titleBackground: {
      height: 50,
      backgroundColor: 'white',
      justifyContent: 'center',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },  
    title: {
      color: 'black',
      fontSize: 25,
      fontWeight: '600',
      textAlign: 'center'
    },
  })

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => HandleNavigation()}
    >
      <Image style={styles.logo} source={{uri: imageLink}} />
      <View style={styles.titleBackground}>
          <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ShowItem;