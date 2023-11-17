import React, { useContext, useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel';
import MapView from 'react-native-maps';
import { Dimensions, ScrollView, StyleSheet, View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import { storeContext } from '../Context/StoreProvider';

const HARDCODED_REST = {
  description: "Horario: de 12 a 22 horas.\nSolo retiro en el local.\nESTE ES EL OBJETO HARDCODEADO",
}

const types = {
  carta: 'carta',
  shows: 'shows',
};

const RestaurantLayout = ({route, navigation}) => {
  // Assignment of the parameter brought from navigation.
  const { restaurant } = route.params;
  
  // Utilización del contexto.
  const [store, dispatch] = useContext(storeContext);
  const [shows, setShows] = useState(null);
  const mainAds = store.mainAds;
  
  // Dimensiones del dispositivo.
  const dimensionsWidth = Dimensions.get('window').width;
  const dimensionsHeight = Dimensions.get('window').height;

  const [section, setSection] = useState(types.shows);
  const [cartaColor, setCartaColor] = useState('grey');
  const [showsColor, setShowsColor] = useState('white');

  function handleNavigation(showItem) {
    navigation.navigate('Show', {show: showItem});
  }

  const renderShow = (show) => {
    return (
      <TouchableOpacity
        style={styles.showContainer}
        onPress={() => handleNavigation(show)}
      >
        <Image style={styles.showIcon} source={{uri: show.imageLink}}/>
        <View style={styles.showTextContainer}>
          <Text style={{...styles.showText, fontSize: 20, fontWeight: '600'}} >{show.title}</Text>
          <Text style={{...styles.showText, }} >{show.description}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  // Search and save of the shows.
  useEffect(() => {
    // Search and save of the shows
    // that contains the restaurant.
    let showsIdList = restaurant.showsIdList;
    let tempShows = [];

    if (showsIdList?.length > 0 ) {
      store.shows.map(element => {
        if (showsIdList.includes(element.id)) {
          tempShows.push(element);
        };
      });
    }

    // Assignment of the saved information.
    setShows(tempShows);
  }, [])

  // Function to change color of the buttons to relate with the display.
  useEffect(() => {
    switch (section) {
      case types.carta:
        setCartaColor('#f3f6f4');
        setShowsColor('#a0a0a0');
        break;
      case types.shows:
        setShowsColor('#f3f6f4');
        setCartaColor('#a0a0a0');
        break;
    }
  }, [section]);

  const styles = StyleSheet.create({
    topBar: {
      height: dimensionsHeight/18,
      width: dimensionsWidth,
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchIcon: {
      height: 25,
      width: 30,
      marginLeft: 10,
    },
    header: {
      width: dimensionsWidth,
      height: dimensionsHeight/4,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
    },
    logo: {
      height: dimensionsWidth/5,
      width: dimensionsWidth/5,
      justifyContent: 'flex-end',
      borderRadius: 10,
    },
    buttonsContainer: {
      marginTop: 15,
      width: dimensionsWidth,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    genericButton: {
      width: dimensionsWidth/2.2,
      fontSize: 20,
      color: 'black',
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'grey',
    },
    genericSection: {
      width: dimensionsWidth,
    },
    showContainer: {
      width: dimensionsWidth/2.5,
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'space-between',
      margin: 10,
      marginRight: 5,
    },
    showIcon: {
      height: dimensionsWidth/2.8,
      width: dimensionsWidth/5,
      borderRadius: 10,
    },
    showTextContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    showText: {
      color: 'black',
      fontSize: 15,
      textAlign: 'left',
      marginLeft: 10,
      marginTop: 5,
      fontWeight: '500',
    },
  });

  return (
    <ScrollView style={{ backgroundColor: '#f3f6f4', }}>
      <Carousel carouselData={mainAds} />

      <View style={styles.header}>
        <View style={{
          flexDirection: 'column',
          alignItems: 'center',
          }}
        >
          <Image
            style={styles.logo}
            source={{uri: restaurant?.imageLink}}
          />
          <Text style={{ marginTop: 4, textAlign: 'center', fontWeight: '600', fontSize: 20, }} >
            {restaurant?.title}
          </Text>
          <Text style={{ marginTop: 10, textAlign: 'center', fontSize: 15, }}>
            {restaurant?.description}
          </Text>
        </View>
        <MapView style={{ width: dimensionsWidth/2.5, }} />
      </View>

      <View style={styles.buttonsContainer}>
        <View style={{...styles.genericButton, backgroundColor: cartaColor}}>
          <Button onPress={() => setSection(types.carta)} title="Carta"/>
        </View>
        <View style={{...styles.genericButton, backgroundColor: showsColor}}>
          <Button onPress={() => setSection(types.shows)} title="Shows"/>
        </View>
      </View>

      <View style={styles.genericSection}>
        <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 20, fontWeight:'600', }} >
          {section === types.carta ? 'Carta:' : 'Shows:'}
        </Text>
        {section === types.carta && (
          // Carta Section
          <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 15, }} >
            {restaurant?.carta}
          </Text>
        )}
        {section === types.shows && shows?.length > 0 && (
          // Available Shows Section
          <FlatList
            data={shows}
            keyExtractor={(item) => item.id}
            renderItem={(object) => renderShow(object.item)}
            horizontal={true}
          />
        )}
        {section === types.shows && shows?.length == 0 && (
          // Empty Shows Section
          <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 15, }} >
            Este restaurante no tiene shows disponibles.
          </Text>
        )}
      </View>
    </ScrollView>
  )
}

export default RestaurantLayout;