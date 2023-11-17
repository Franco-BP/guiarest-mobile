import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet, Dimensions, TextInput, FlatList } from 'react-native'
import SearchItem from '../Items/SearchItem';

const SearchLayout = ({ route, navigation }) => {
  // Assignment of the parameter brought from navigation.
  const { restaurants } = route.params;

  // Variables used for the searching logic.
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const dimensionsHeight = Dimensions.get('window').height;
  const dimensionsWidth = Dimensions.get('window').width;
  const SEARCH_ICON = 'https://cdn2.iconfinder.com/data/icons/minimal-set-five/32/minimal-48-512.png';

  const styles = StyleSheet.create({
    container: {
      width: dimensionsWidth,
      height: dimensionsHeight,
    },
    searchBarContainer: {
      minHeight: 40,
      padding: 20,
      backgroundColor: '#f3f6f4',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignContent: 'center',
    },
    searchIcon: {
      height: 25,
      width: 30,
      marginTop: 6,
      marginRight: 5,
    },
    input: {
      height: 40,
      width: dimensionsWidth/1.5,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 10,
      backgroundColor: 'white',
    },
    suggestionListContainer: {
      width: dimensionsWidth,
      height: '100%',
      borderColor: 'grey',
      borderTopWidth: 1,
      backgroundColor: 'white',
      paddingTop: 10,
    },
  })

  const handleInputChange = (text) => {
    setQuery(text);
    const filteredData = restaurants.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
    setSuggestions(filteredData);
  }

  useEffect(() => {
    setSuggestions(restaurants);
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}> 
        <Image style={styles.searchIcon} source={{uri: SEARCH_ICON}} />  
        <TextInput
          style={styles.input}
          placeholder="Buscar por nombre..."
          keyboardType="default"
          value={query}
          onChangeText={handleInputChange}
        />
      </View>

      <View style={styles.suggestionListContainer}>
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item.title}
          renderItem={(object) => <SearchItem item={object.item} navigation={navigation} />}
        />
      </View>
    </View>
  )
}

export default SearchLayout;