import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Text, Image } from 'react-native';

const SearchBarButton = ({ restaurants, navigation }) => {
  const dimensionsWidth = Dimensions.get('window').width;
  const SEARCH_ICON = 'https://cdn2.iconfinder.com/data/icons/minimal-set-five/32/minimal-48-512.png';

  function handleNavigation() {
    navigation.navigate('Search', {restaurants: restaurants})
  }

  const styles = StyleSheet.create({
    searchBarContainer: {
      minHeight: 20,
      marginTop: 20,
      marginBottom: 10,
      marginHorizontal: 20,
      width: dimensionsWidth-40,
    },
    input: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 10,
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'flex-start',
    },
    searchIcon: {
      height: 15,
      width: 18,
    },
    placeHolder: {
      color: 'grey',
      marginLeft: 10,
    },
  });

  return (
    <TouchableOpacity
      style={styles.searchBarContainer}
      onPress={() => handleNavigation()}
    >
      <View style={styles.input}>
        <Image style={styles.searchIcon} source={{uri: SEARCH_ICON}} />
        <Text style={styles.placeHolder}>Buscar por nombre...</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SearchBarButton;