import React, { useContext } from 'react'
import Carousel from '../Carousel/Carousel';
import MapView from 'react-native-maps';
import { Dimensions, ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { storeContext } from '../Context/StoreProvider';

const HARDCODED_SHOW = {
  imageLink: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXs7OzMzMzJycnr6+vX19fT09Pn5+fh4eHNzc3l5eXv7+/c3NzR0dHg4ODa2trV1dXCnPXPAAAFDUlEQVR4nO2c2babMAxF8YAH2cD//20lm/HmpoG+gNOz12pJgLTekSeBSdcBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPgS5zd4kvkrK+hupjU469VpfRqSHF9A+CrOjuLvdpKHB5++kSmT9i7y74ebi009WORr6UZqqpkXhcLC0Mn8Xe0Kfkz3ymUUOKintVHeLnzzRq6OdRQ39WbNRwHerCx8+0aTisA7/+2BbbNBy3+Ur6eY770dl+naFT+qjYpuH7Wupk30GxTUOzxfB4gqvae8U2Dd+NFm6J7E6xUUPyZcRXvwseFBs1ZIZxHI5HN8G9YruGL+wFd4rfY3gU3BS/xvCn4KrYtiGtLfFVcFFs2pCSzvXVb4Ki2LVtSHLlrSj+LliHy4YNqV5azO8FGzek5dppfivYtiFtF4ffXyVu2ZBOXf1u2PCcYMOGJwUbNhxO3qBp19CeE4ThA4HhFxmevYnvWzU07iSmVcMrwPBhcGmzufYRyTymZgxJFlZcXDEk05+X2zfPJf7Tehp1Mex3QmdnpPtBMbSzYEgwyV5k+PyPAgAAAOABmPlPt27NOg/jHJDKDiP75v2me9mQie6x82+nZfFFzZpGLVMUmnIt7ahD1jztLPNV7cjqoqPLQerLWhQj70zWOagTSxlvoRjW0nYqyxIhE7LMNVnUEHX8Mqr6YIUNJRWcDadQLgjIOz3y8XhiKeMtFEPbS/D8NMkm2SQ3P6NeTmHDsrVeyTewxLAoiWHK9V5AfmZFLYaT59JxmXu5uBRiCYxd8/01hkOxXg29KobU1wzR6F//g9uptZS4iRlFUktjINlSCeswDG7OG4kNaeKEfjH01FsSwzAvf9PPzBRnQztSGosZ19hh6qlGxlo1cAy70pdKqqQjrYYcNSeGuaZQ5tmGTpFyJYZ6tHbUhsZy/UVCubbDQbrdnWE3BI4oTWM5Hp9dSylwR8GGNEh/KYV2WoY4CdDekCZb+91iSHlUixofuc/ib8yG3aC96MyNiismJZ2ci0EMo/fekJV6a/QuhvyODckG7+L0eVX4PZiefca67WwsGwmI6yhOOfej61wvuK4+guHrGd1Yhr9hkrN9H/JzL7nRcXtc5FyfoDw+Svljpff+RAAA+H/Z94O09Y7zDvNuLtZK95mU1sGKheRMLmvNKZJRWoWyftQH3iGPa7v6eAmP+pR5JAx8hszxloQiyF2rZw6JiZMkZ+WBbHmlByLnuNy8M5eZTuQdkus6VSbWYijTHslFPCeIi6Fy3dtg30yqC704P0wlFyqUrWML7ct1Gv4CXLYyFV9iKLqSfuwMn0qq82WeZpcY1t8PmA3LpLUrKhxIknq6GXIz1G4zNI+d1lRDUpFKO1RBkr1aSyduhXNWYSW94hyCFkOV+xwibYaZeWYcZ0NdDXlinaVJcbcReDp+NJQMf41hdDGpXQw5u4jPbIjVS/Lzub5ykl/ao7httZSjS+I17tth6qmJdig9jS09Td0Tw1puDk3taUw19OpomJswnIyJvSw3YFfneRDI42YY9WA4A05dNaRJL6OFMzxaDNLNltVRKhrjHlpLg5qzVzHkAT8kWTy0HI6yZ5ARv1wNNdwR1RGf6Xm/CfJ7Ib7L4bnrTo7Z7ZLzvh7e/qZulxTPL1r8vSEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN/GHxB0NNJvauSKAAAAAElFTkSuQmCC',
  title: 'Show no encontrado',
  description: 'Descripción no disponible',
}

const ShowLayout = ({ route, navigation }) => {
  // Assignment of the parameter brought from navigation.
  const { show } = route.params;

  // Dimensiones del dispositivo.
  const dimensionsWidth = Dimensions.get('window').width;
  const dimensionsHeight = Dimensions.get('window').height;

  // Utilización del contexto.
  const [store, dispatch] = useContext(storeContext);
  const mainAds = store.mainAds;

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
      backgroundColor: '#f3f6f4',
    },
    logo: {
      height: dimensionsHeight/4.5,
      width: dimensionsHeight/8,
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
    showContainer: {
      width: dimensionsWidth/2.5,
      height: dimensionsWidth/1,
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
      marginLeft: 10,
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
      paddingTop: 5,
      fontWeight: '500',
    },
  });

  return (
    <ScrollView>
      <Carousel carouselData={mainAds} />

      <View style={styles.header}>
        <View style={{
          flexDirection: 'column',
          alignItems: 'center',
          }}
        >
          <Image
            style={styles.logo}
            source={{uri: show?.imageLink}}
            alt={show?.title? show.title : HARDCODED_SHOW.title}
          />
        </View>
        <MapView style={{ height: dimensionsHeight/4.5, width: dimensionsWidth/2.5, }} />
      </View>

      <View style={styles.genericSection}>
        <Text style={{ marginTop: 4, marginLeft: 20, fontSize: 25, fontWeight: '700', }} >
          {show?.title? show.title : HARDCODED_SHOW.title}
        </Text>
        <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 20, fontWeight:'500', }} >
          Descripción:
        </Text>
        <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 15, }} >
          {show?.description? show.description : HARDCODED_SHOW.description}
        </Text>
      </View>
    </ScrollView>
  )
}

export default ShowLayout;