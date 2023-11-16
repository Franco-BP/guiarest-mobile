import React from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const SearchBarButton = () => {
  const [query, setQuery] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);

  const handleInputChange = (text) => {
    setQuery(text);
    const filteredData = data.filter(item => item.text.toLowerCase().includes(text.toLowerCase()) && text != "");
    setSuggestions(filteredData);
  }

  function suggestionElement(object) {
    return(
      <Text style={styles.suggestionElement} onPress={() => {}}>{object.item.text}</Text>
    )
  }

  const data = [ 
    {
      key: "Manzana",
      text: "Manzana",
    },
    {
      key: "Banana",
      text: "Banana",
    },
    {
      key: "Pera",
      text: "Pera",
    },
    {
      key: "Naranja",
      text: "Naranja",
    },
    {
      key: "Durazno",
      text: "Durazno",
    }
  ];

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.input}
        placeholder="Buscar por nombre..."
        keyboardType="default"
        value={query}
        onChangeText={handleInputChange}
      />
      {/* <View style={styles.suggestionListContainer}>
        <FlatList
          style={styles.suggestionList}
          data={suggestions}
          keyExtractor={(item) => item.key}
          renderItem={(object) => suggestionElement(object)}
        />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  searchBarContainer: {
    minHeight: 40,
    marginTop: 12,
    paddingTop: 10,
    paddingHorizontal: 20,
    zIndex: 100,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  suggestionListContainer: {
    width: '100%',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  suggestionList: {
    width: '100%',
    maxHeight: 105,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: 'white',
  },
  suggestionElement: {
    width: '100%',
    color: 'black',
    marginTop: 8,
    paddingLeft: 10,
    fontSize: 20,
    textAlign: 'left'
  }
});

export default SearchBarButton